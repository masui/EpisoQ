#!//usr/bin/env node
//
// coding: utf-8
//
// Scrapbox上にリストしたなぞなぞ問題プールからランダムに問題を選択して問題編集画面を開く
// https://github.com/masui/EpisoQ/ を利用する
//
// データ例: https://Scrapbox.io/masui/県名なぞなぞ
//
// % episoq [masui [県名なぞなぞ [episopass.js [5]]]]
//
// パラメタは ~/.episoq.json に保存する
//

const exec = require('child_process').exec;
const path = require("path")
const fs =   require('fs');

const home = process.env["HOME"]
const configfile = `${home}/.episoq.json`

// 引数取得
var project =    process.argv[2]
var pagetitle =  process.argv[3]
var js =         process.argv[4]
var nquestions = process.argv[5]

var json = {};

fs.stat(configfile, (error, stats) => {
    var text = "{}"
    if (error) {
	if (error.code === 'ENOENT') {
	    // console.log('ファイル・ディレクトリは存在しません。');
	} else {
	    console.log(error);
	}
    }
    else {
	// console.log('ファイル・ディレクトリは存在します。');
	text = fs.readFileSync(configfile, 'utf8');
    }

    var json = {}
    try {
	json = JSON.parse(text)
    }
    catch(err){
	console.log("json read error")
    }
    
    json.project =    project    || json.project    || 'masui'
    json.pagetitle =  pagetitle  || json.pagetitle  || '県名なぞなぞ'
    json.js =         js         || json.js         || 'episopass.js'
    json.nquestions = nquestions || json.nquestions || 10
    
    fs.writeFileSync(configfile, JSON.stringify(json))
    
    var url = `https://masui.github.io/EpisoQ/?qa=https://scrapbox.io/api/code/${json.project}/${json.pagetitle}/${json.js}&n=${json.nquestions}`
    
    var open = "open"
    
    exec('which xdg-open', (err, stdout, stderr) => {
	if(! err){
	    open = "xdg-open" // X環境では xdg-open を使う
	}
	exec(`${open} '${encodeURI(url)}'`)
    });
})

