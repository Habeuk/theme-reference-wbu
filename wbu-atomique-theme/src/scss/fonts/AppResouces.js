import Filtres from "./Filtres.js";
import BuildCreneaux from "./AppResoucesBuildCreneaux";
import BuildCalendar from "./AppResoucesBuildCalendar.js";
if (window.moment) {
  var moment = window.moment;
}

class DateUtilisable {
  constructor(jour_desactivee, app_delai_jour, filters) {
    this.jour_desactivee = jour_desactivee;
    this.app_delai_jour = app_delai_jour;
    this.filters = filters;
    //
    this.test_delai_jour = 0;
    this.test_jour_semaine = 0;
    this.test_date_desactivee = 0;
  }

  /**
   * @parameter date doit etre un object moment.
   */
  async date_utilisable(date, apply_delai_true = true) {
    return await this.getDayUtilisable(date, null, apply_delai_true);
  }

  /**
   * Obtient la date utilisable, et permet aussi de determiner le prochain jour utilisable.
   * La paramettre date doit etre un object moment.
   * Pour la validation on a 3 cas :
   * - Validation des jours de la semaine.
   * - Validation des dates desactivées.
   * - Validation des delais.
   * - Application du delai.
   * NB: les function qui doivent integrer cette derniere doivent remettre les variables suivante à leurs valeurs par defaut :
   * - test_delai_jour
   * - test_jour_semaine
   * - test_date_desactivee
   * @return un object moment (complet jour, mois, année, heure, mn, s)
   */
  getDayUtilisable(date, provider = null, apply_delai_true = true) {
    var self = this;
    return new Promise(function(resolve, reject) {
      if (self.test_jour_semaine > 6) {
        alert("Boucle infinie detecter ..." + provider);
        reject(false);
        return false;
      }
      if (self.test_date_desactivee > 99) {
        alert("Boucle infinie detecter ...");
        reject(false);
        return false;
      }
      var index_day_week = date.day();
      if (
        self.jour_desactivee.length &&
        self.jour_desactivee.includes(index_day_week)
      ) {
        self.test_jour_semaine++;
        // si ce jour est automatiquement desactivée,
        // on passe au suivant.
        date.add(1, "days");
        resolve(
          self.getDayUtilisable(date, "jour desactivée", apply_delai_true)
        );
      } else {
        self.DisableDateByfilter(date).then(Filter => {
          if (Filter.status) {
            self.test_date_desactivee++;
            date.add(1, "days");
            resolve(
              self.getDayUtilisable(date, "date desactivée", apply_delai_true)
            );
          }
          // on applique egalement le decallage.
          else if (
            apply_delai_true &&
            self.app_delai_jour &&
            self.app_delai_jour > self.test_delai_jour
          ) {
            self.test_delai_jour++;
            /**
             * On applique le delai en jour apres jour afin de s'assurer que les jours
             * desactivées ne sont pas pris en compte.
             */
            date.add(1, "days");
            resolve(
              self.getDayUtilisable(date, "delai jour", apply_delai_true)
            );
          } else {
            resolve(date);
          }
        });
      }
    });
  }

  DisableDateByfilter(date) {
    var self = this;
    return new Promise(resolvEnd => {
      var index_day = date.day();
      var app_date_current_string_en = date.format("YYYY-MM-DD");
      var app_date_current_en = moment(
        app_date_current_string_en,
        "YYYY-MM-DD"
      );
      // Desactivation du jour en function des filtres.
      const CustomLoop = function(i = 0) {
        return new Promise(resolv => {
          const filter = self.filters[i];
          if (filter.h_debut.length === 0 && filter.h_fin.length === 0) {
            Filtres.loopAttribFilter(
              i,
              filter,
              app_date_current_en,
              app_date_current_string_en,
              index_day,
              "date"
            ).then(result => {
              resolv(result);
            });
          } else {
            resolv({ status: false, i: i, custom_class: "nothing" });
          }
        });
      };
      const execution = (i = 0) => {
        CustomLoop(i).then(result => {
          var ii = result.i + 1;
          if (result.status) {
            resolvEnd(result);
            return;
          } else if (self.filters[ii]) {
            execution(ii);
          } else {
            resolvEnd(result);
            return;
          }
        });
      };
      execution();
    });
  }
}

export { DateUtilisable, BuildCreneaux, BuildCalendar };
