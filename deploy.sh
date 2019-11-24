npm run build
git add .
git commit -m 'new build and deploy'
git push origin master
git checkout gh-pages
git pull origin master
git subtree push --prefix dist origin gh-pages