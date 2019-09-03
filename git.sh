echo "Isi username & email";
git config --global user.name "handrawan112"
git config --global user.email "handrawanwawan012@gmail.com"
echo "Membuat git";
git init
echo "Menyetting git";
echo "Masukan URL repository git";
read url
git remote add origin $url;
echo "URL disimpan $url";
echo "Menambahkan file";
git add *
echo "Menambahkan file ke git";
git commit -m "update"
echo "Mengirim ke server git";
git push -u origin master
echo "Selesai";


