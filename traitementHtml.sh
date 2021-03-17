#!/bin/bash
echo -e '\n   ce script permet de traiter un theme Drupal \n';
#echo -e '    étape : 1/2 Renommer tous les fichiers qui possèdent xxx dans leur nom par aaa (example : .xxx?ver=XXX vers .xxx ) \n';
remplace=${PWD##*/}
echo 'Dossier courrant (nom du thème) : ' $remplace;
let "NombreFichierRename=0"
let "NombreFichierUpdate=0"

#
read -p ' mettre à jour le thème , 1 mettre à jour ou 0 non : ' updatetheme

#nom du
if [[  $updatetheme ]] && [[ $updatetheme == "1" ]] ; then
	#nom de l'ancien theme, ce nom serra remplacer par le nom du dossier courant
	read -p 'Entrez le nom de lancien theme    : ' search;
	filename="*"; #tous les fichiers.
	####################################################
	#renommer les noms de fichiers
	if [[ $search ]]; then
	for file in $(find $PWD -name "$filename")
	do 
	grand_parent=$(dirname $(dirname $file))
	parent=$(dirname $file)
	nomFichier=$(basename $file);
	filenaParent=$(basename $parent);
	#echo $file;
	#echo 'Dossier : ' $parent
	#on interdit l'acces à certains répertoire //
	if [[ -f "${file}" ]] && [[ $parent != *"bootstrap-3"* ]] && [[ $parent != *".git"* ]] && [[ $parent != *"bootstrap-4"* ]] && [[ $parent != *"bootstrap-material-design"* ]] && [[ filenaParent != *"traitementHtml"* ]] && 
	[[ $parent != *"css"* ]] && [[ $parent != *"font"* ]] && [[ $parent != *"scss"* ]] && [[ $parent != *"scssphp-master"* ]]; then
		echo -e "Fichier : " $parent"/"$nomFichier;
		####################################################
		#renommer le contenu des fichiers
		if grep -q "$search" $file ; then
			sed -re 's/'"$search"'/'"$remplace"'/g' $file > $parent'/temponFile.inc';
			cp $parent'/temponFile.inc' $file;
			rm $parent'/temponFile.inc';
			let "NombreFichierUpdate = NombreFichierUpdate+1"
			####################################################
			#renommer le contenu des fichiers
			echo -e '*** Contenu mis à jour *** : ';
		fi;
		#renommer le nom des fichiers
		newName=$(echo $nomFichier | sed  -re 's/'"$search"'/'"$remplace"'/g'); ###### ne supporte pas les regex pas -e
		if [[ $newName != $nomFichier ]]; then
			#echo "dissoier parrent : " $filenaParent;
			echo -e '*** renommer par *** : '$newName;
			#echo  $parent'/'$newName;
			mv $parent'/'$nomFichier  $parent'/'$newName
			let "NombreFichierRename = NombreFichierRename+1"
		fi;
		
	fi;
	done
	echo -e ' \n Nombre de fichiers renommés : ' $NombreFichierRename;
	echo -e ' \n Contenu de fichier analysé : ' $NombreFichierUpdate;
	echo -e 'Thème mis à jour  ';
	else
		echo -e 'Action annulée, nom du thème vide ';
	fi;
	
	
else 
	echo -e 'Action annulée ';
fi;








#  .js%3Fver=[1-9]*.[0-9]*.?[0-9]*.?[0-9]*.?[0-9]  pour renommer les fichiers .js?ver=x.x.x.x.x  en .js
#  .js\\?ver\\=[1-9]*.[0-9]*.?[0-9]*.?[0-9]*.?[0-9]  pour renommer les fichiers .js?ver=x.x.x.x.x  en .js ( pour les fichiers )
#
#
#  .css%3Fver=[1-9]*.[0-9]*.?[0-9]*.?[0-9]*.?[0-9]  pour renommer les fichiers .css?ver=x.x.x.x.x  en .css
#  .css\\?ver\\=[1-9]*.[0-9]*.?[0-9]*.?[0-9]*.?[0-9]  pour renommer les fichiers .css?ver=x.x.x.x.x  en .css ( pour les fichiers )
#example
#find $PWD  -name "*.jpg" #liste les images
#find $PWD \(   -name "*.css?ver=*" \) -exec sh -c 'x="{}";
#grep -c






