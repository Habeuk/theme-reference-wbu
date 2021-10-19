# theme_reference_wbu

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

theme_reference_wbu est un theme drupal est un modele de base, il permet de generer rapidement un sous theme. il utilise nodejs pour generer les styes.

## Getting Started <a name = "getting_started"></a>

Pour son installation vous devez avoir un envirroment drupal utilisant composer.
vous pouvez l'installer avec :

```
composer require stephane888/theme_reference_wbu
```

### Prerequisites

La proceduire qui suit a été effectué sous un environnement linux.
Nous allons creer le theme : mydigitaltheme

### Installing

Une foix le theme telechargé, il est dans /themes/contrib.
Copier le /themes/contrib/theme_reference_wbu vers /themes/contrib/mydigitaltheme

Acceder à /themes/contrib/mydigitaltheme via un terminal et executé le fichie traitementHtml.sh

```
 ./traitementHtml.sh
```

pour la question : mettre à jour le thème , 1 mettre à jour ou 0 non , la reponse 1

```
mettre à jour le thème , 1 mettre à jour ou 0 non : 1
```

ensuite :

```
Entrez le nom de lancien theme    : theme_reference_wbu
```

Votre nouveau theme mydigitaltheme est pret.

## Usage <a name = "usage"></a>

Les styles sont gerers ici via nodeJs, donc vous devez egalment installé les paquets requis:
Acceder à /wbu-atomique-theme

```
cd mydigitaltheme/wbu-atomique-theme
npm install
```
