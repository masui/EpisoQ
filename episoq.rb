#!/usr/bin/env ruby
# coding: utf-8
#
# Scrapbox上にリストしたなぞなぞ問題プールからランダムに問題を選択して問題編集画面を開く
# https://github.com/masui/EpisoQ/ を利用する
#
# データ例: https://Scrapbox.io/masui/県名なぞなぞ
#
# % episoq masui 県名なぞなぞ 5
#
project = ARGV[0]    || 'masui'
pagetitle = ARGV[1]  || '県名なぞなぞ'
nquestions = ARGV[2] || 10
js = ARGV[3]         || 'episopass.js'

url = "https://masui.github.io/EpisoQ/?qa=https://scrapbox.io/api/code/#{project}/#{pagetitle}/#{js}&n=#{nquestions}"

open = "open"
open = "xdg-open" if `which xdg-open` != ''
system "#{open} '#{url}'"
