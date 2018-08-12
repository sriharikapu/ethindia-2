define("ace/snippets/html",["require","exports","module"],function(e,t,n){"use strict";t.snippetText='# Some useful Unicode entities\n# Non-Breaking Space\nsnippet nbs\n	&nbsp;\n# \u2190\nsnippet left\n	&#x2190;\n# \u2192\nsnippet right\n	&#x2192;\n# \u2191\nsnippet up\n	&#x2191;\n# \u2193\nsnippet down\n	&#x2193;\n# \u21a9\nsnippet return\n	&#x21A9;\n# \u21e4\nsnippet backtab\n	&#x21E4;\n# \u21e5\nsnippet tab\n	&#x21E5;\n# \u21e7\nsnippet shift\n	&#x21E7;\n# \u2303\nsnippet ctrl\n	&#x2303;\n# \u2305\nsnippet enter\n	&#x2305;\n# \u2318\nsnippet cmd\n	&#x2318;\n# \u2325\nsnippet option\n	&#x2325;\n# \u2326\nsnippet delete\n	&#x2326;\n# \u232b\nsnippet backspace\n	&#x232B;\n# \u238b\nsnippet esc\n	&#x238B;\n# Generic Doctype\nsnippet doctype HTML 4.01 Strict\n	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"\n	"http://www.w3.org/TR/html4/strict.dtd">\nsnippet doctype HTML 4.01 Transitional\n	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"\n	"http://www.w3.org/TR/html4/loose.dtd">\nsnippet doctype HTML 5\n	<!DOCTYPE HTML>\nsnippet doctype XHTML 1.0 Frameset\n	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\n	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\nsnippet doctype XHTML 1.0 Strict\n	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\n	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\nsnippet doctype XHTML 1.0 Transitional\n	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\nsnippet doctype XHTML 1.1\n	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"\n	"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\n# HTML Doctype 4.01 Strict\nsnippet docts\n	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"\n	"http://www.w3.org/TR/html4/strict.dtd">\n# HTML Doctype 4.01 Transitional\nsnippet doct\n	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"\n	"http://www.w3.org/TR/html4/loose.dtd">\n# HTML Doctype 5\nsnippet doct5\n	<!DOCTYPE html>\n# XHTML Doctype 1.0 Frameset\nsnippet docxf\n	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"\n	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">\n# XHTML Doctype 1.0 Strict\nsnippet docxs\n	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\n	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n# XHTML Doctype 1.0 Transitional\nsnippet docxt\n	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n# XHTML Doctype 1.1\nsnippet docx\n	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"\n	"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\n# html5shiv\nsnippet html5shiv\n	<!--[if lte IE 8]>\n		<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"><\/script>\n	<![endif]-->\nsnippet html5printshiv\n	<!--[if lte IE 8]>\n		<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"><\/script>\n	<![endif]-->\n# Attributes\nsnippet attr\n	${1:attribute}="${2:property}"\nsnippet attr+\n	${1:attribute}="${2:property}" attr+${3}\nsnippet .\n	class="${1}"${2}\nsnippet #\n	id="${1}"${2}\nsnippet alt\n	alt="${1}"${2}\nsnippet charset\n	charset="${1:utf-8}"${2}\nsnippet data\n	data-${1}="${2:$1}"${3}\nsnippet for\n	for="${1}"${2}\nsnippet height\n	height="${1}"${2}\nsnippet href\n	href="${1:#}"${2}\nsnippet lang\n	lang="${1:en}"${2}\nsnippet media\n	media="${1}"${2}\nsnippet name\n	name="${1}"${2}\nsnippet rel\n	rel="${1}"${2}\nsnippet scope\n	scope="${1:row}"${2}\nsnippet src\n	src="${1}"${2}\nsnippet title=\n	title="${1}"${2}\nsnippet type\n	type="${1}"${2}\nsnippet value\n	value="${1}"${2}\nsnippet width\n	width="${1}"${2}\n# Elements\nsnippet a\n	<a href="${1:#}">${2:$1}</a>\nsnippet a.\n	<a class="${1}" href="${2:#}">${3:$1}</a>\nsnippet a#\n	<a id="${1}" href="${2:#}">${3:$1}</a>\nsnippet a:ext\n	<a href="http://${1:example.com}">${2:$1}</a>\nsnippet a:mail\n	<a href="mailto:${1:joe@example.com}?subject=${2:feedback}">${3:email me}</a>\nsnippet abbr\n	<abbr title="${1}">${2}</abbr>\nsnippet address\n	<address>\n		${1}\n	</address>\nsnippet area\n	<area shape="${1:rect}" coords="${2}" href="${3}" alt="${4}" />\nsnippet area+\n	<area shape="${1:rect}" coords="${2}" href="${3}" alt="${4}" />\n	area+${5}\nsnippet area:c\n	<area shape="circle" coords="${1}" href="${2}" alt="${3}" />\nsnippet area:d\n	<area shape="default" coords="${1}" href="${2}" alt="${3}" />\nsnippet area:p\n	<area shape="poly" coords="${1}" href="${2}" alt="${3}" />\nsnippet area:r\n	<area shape="rect" coords="${1}" href="${2}" alt="${3}" />\nsnippet article\n	<article>\n		${1}\n	</article>\nsnippet article.\n	<article class="${1}">\n		${2}\n	</article>\nsnippet article#\n	<article id="${1}">\n		${2}\n	</article>\nsnippet aside\n	<aside>\n		${1}\n	</aside>\nsnippet aside.\n	<aside class="${1}">\n		${2}\n	</aside>\nsnippet aside#\n	<aside id="${1}">\n		${2}\n	</aside>\nsnippet audio\n	<audio src="${1}>${2}</audio>\nsnippet b\n	<b>${1}</b>\nsnippet base\n	<base href="${1}" target="${2}" />\nsnippet bdi\n	<bdi>${1}</bdo>\nsnippet bdo\n	<bdo dir="${1}">${2}</bdo>\nsnippet bdo:l\n	<bdo dir="ltr">${1}</bdo>\nsnippet bdo:r\n	<bdo dir="rtl">${1}</bdo>\nsnippet blockquote\n	<blockquote>\n		${1}\n	</blockquote>\nsnippet body\n	<body>\n		${1}\n	</body>\nsnippet br\n	<br />${1}\nsnippet button\n	<button type="${1:submit}">${2}</button>\nsnippet button.\n	<button class="${1:button}" type="${2:submit}">${3}</button>\nsnippet button#\n	<button id="${1}" type="${2:submit}">${3}</button>\nsnippet button:s\n	<button type="submit">${1}</button>\nsnippet button:r\n	<button type="reset">${1}</button>\nsnippet canvas\n	<canvas>\n		${1}\n	</canvas>\nsnippet caption\n	<caption>${1}</caption>\nsnippet cite\n	<cite>${1}</cite>\nsnippet code\n	<code>${1}</code>\nsnippet col\n	<col />${1}\nsnippet col+\n	<col />\n	col+${1}\nsnippet colgroup\n	<colgroup>\n		${1}\n	</colgroup>\nsnippet colgroup+\n	<colgroup>\n		<col />\n		col+${1}\n	</colgroup>\nsnippet command\n	<command type="command" label="${1}" icon="${2}" />\nsnippet command:c\n	<command type="checkbox" label="${1}" icon="${2}" />\nsnippet command:r\n	<command type="radio" radiogroup="${1}" label="${2}" icon="${3}" />\nsnippet datagrid\n	<datagrid>\n		${1}\n	</datagrid>\nsnippet datalist\n	<datalist>\n		${1}\n	</datalist>\nsnippet datatemplate\n	<datatemplate>\n		${1}\n	</datatemplate>\nsnippet dd\n	<dd>${1}</dd>\nsnippet dd.\n	<dd class="${1}">${2}</dd>\nsnippet dd#\n	<dd id="${1}">${2}</dd>\nsnippet del\n	<del>${1}</del>\nsnippet details\n	<details>${1}</details>\nsnippet dfn\n	<dfn>${1}</dfn>\nsnippet dialog\n	<dialog>\n		${1}\n	</dialog>\nsnippet div\n	<div>\n		${1}\n	</div>\nsnippet div.\n	<div class="${1}">\n		${2}\n	</div>\nsnippet div#\n	<div id="${1}">\n		${2}\n	</div>\nsnippet dl\n	<dl>\n		${1}\n	</dl>\nsnippet dl.\n	<dl class="${1}">\n		${2}\n	</dl>\nsnippet dl#\n	<dl id="${1}">\n		${2}\n	</dl>\nsnippet dl+\n	<dl>\n		<dt>${1}</dt>\n		<dd>${2}</dd>\n		dt+${3}\n	</dl>\nsnippet dt\n	<dt>${1}</dt>\nsnippet dt.\n	<dt class="${1}">${2}</dt>\nsnippet dt#\n	<dt id="${1}">${2}</dt>\nsnippet dt+\n	<dt>${1}</dt>\n	<dd>${2}</dd>\n	dt+${3}\nsnippet em\n	<em>${1}</em>\nsnippet embed\n	<embed src=${1} type="${2} />\nsnippet fieldset\n	<fieldset>\n		${1}\n	</fieldset>\nsnippet fieldset.\n	<fieldset class="${1}">\n		${2}\n	</fieldset>\nsnippet fieldset#\n	<fieldset id="${1}">\n		${2}\n	</fieldset>\nsnippet fieldset+\n	<fieldset>\n		<legend><span>${1}</span></legend>\n		${2}\n	</fieldset>\n	fieldset+${3}\nsnippet figcaption\n	<figcaption>${1}</figcaption>\nsnippet figure\n	<figure>${1}</figure>\nsnippet footer\n	<footer>\n		${1}\n	</footer>\nsnippet footer.\n	<footer class="${1}">\n		${2}\n	</footer>\nsnippet footer#\n	<footer id="${1}">\n		${2}\n	</footer>\nsnippet form\n	<form action="${1}" method="${2:get}" accept-charset="utf-8">\n		${3}\n	</form>\nsnippet form.\n	<form class="${1}" action="${2}" method="${3:get}" accept-charset="utf-8">\n		${4}\n	</form>\nsnippet form#\n	<form id="${1}" action="${2}" method="${3:get}" accept-charset="utf-8">\n		${4}\n	</form>\nsnippet h1\n	<h1>${1}</h1>\nsnippet h1.\n	<h1 class="${1}">${2}</h1>\nsnippet h1#\n	<h1 id="${1}">${2}</h1>\nsnippet h2\n	<h2>${1}</h2>\nsnippet h2.\n	<h2 class="${1}">${2}</h2>\nsnippet h2#\n	<h2 id="${1}">${2}</h2>\nsnippet h3\n	<h3>${1}</h3>\nsnippet h3.\n	<h3 class="${1}">${2}</h3>\nsnippet h3#\n	<h3 id="${1}">${2}</h3>\nsnippet h4\n	<h4>${1}</h4>\nsnippet h4.\n	<h4 class="${1}">${2}</h4>\nsnippet h4#\n	<h4 id="${1}">${2}</h4>\nsnippet h5\n	<h5>${1}</h5>\nsnippet h5.\n	<h5 class="${1}">${2}</h5>\nsnippet h5#\n	<h5 id="${1}">${2}</h5>\nsnippet h6\n	<h6>${1}</h6>\nsnippet h6.\n	<h6 class="${1}">${2}</h6>\nsnippet h6#\n	<h6 id="${1}">${2}</h6>\nsnippet head\n	<head>\n		<meta http-equiv="content-type" content="text/html; charset=utf-8" />\n\n		<title>${1:`substitute(Filename(\'\', \'Page Title\'), \'^.\', \'\\u&\', \'\')`}</title>\n		${2}\n	</head>\nsnippet header\n	<header>\n		${1}\n	</header>\nsnippet header.\n	<header class="${1}">\n		${2}\n	</header>\nsnippet header#\n	<header id="${1}">\n		${2}\n	</header>\nsnippet hgroup\n	<hgroup>\n		${1}\n	</hgroup>\nsnippet hgroup.\n	<hgroup class="${1}>\n		${2}\n	</hgroup>\nsnippet hr\n	<hr />${1}\nsnippet html\n	<html>\n	${1}\n	</html>\nsnippet xhtml\n	<html xmlns="http://www.w3.org/1999/xhtml">\n	${1}\n	</html>\nsnippet html5\n	<!DOCTYPE html>\n	<html>\n		<head>\n			<meta http-equiv="content-type" content="text/html; charset=utf-8" />\n			<title>${1:`substitute(Filename(\'\', \'Page Title\'), \'^.\', \'\\u&\', \'\')`}</title>\n			${2:meta}\n		</head>\n		<body>\n			${3:body}\n		</body>\n	</html>\nsnippet xhtml5\n	<!DOCTYPE html>\n	<html xmlns="http://www.w3.org/1999/xhtml">\n		<head>\n			<meta http-equiv="content-type" content="application/xhtml+xml; charset=utf-8" />\n			<title>${1:`substitute(Filename(\'\', \'Page Title\'), \'^.\', \'\\u&\', \'\')`}</title>\n			${2:meta}\n		</head>\n		<body>\n			${3:body}\n		</body>\n	</html>\nsnippet i\n	<i>${1}</i>\nsnippet iframe\n	<iframe src="${1}" frameborder="0"></iframe>${2}\nsnippet iframe.\n	<iframe class="${1}" src="${2}" frameborder="0"></iframe>${3}\nsnippet iframe#\n	<iframe id="${1}" src="${2}" frameborder="0"></iframe>${3}\nsnippet img\n	<img src="${1}" alt="${2}" />${3}\nsnippet img.\n	<img class="${1}" src="${2}" alt="${3}" />${4}\nsnippet img#\n	<img id="${1}" src="${2}" alt="${3}" />${4}\nsnippet input\n	<input type="${1:text/submit/hidden/button/image}" name="${2}" id="${3:$2}" value="${4}" />${5}\nsnippet input.\n	<input class="${1}" type="${2:text/submit/hidden/button/image}" name="${3}" id="${4:$3}" value="${5}" />${6}\nsnippet input:text\n	<input type="text" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:submit\n	<input type="submit" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:hidden\n	<input type="hidden" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:button\n	<input type="button" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:image\n	<input type="image" name="${1}" id="${2:$1}" src="${3}" alt="${4}" />${5}\nsnippet input:checkbox\n	<input type="checkbox" name="${1}" id="${2:$1}" />${3}\nsnippet input:radio\n	<input type="radio" name="${1}" id="${2:$1}" />${3}\nsnippet input:color\n	<input type="color" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:date\n	<input type="date" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:datetime\n	<input type="datetime" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:datetime-local\n	<input type="datetime-local" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:email\n	<input type="text" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:file\n	<input type="file" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:month\n	<input type="month" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:number\n	<input type="number" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:password\n	<input type="password" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:range\n	<input type="range" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:reset\n	<input type="reset" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:search\n	<input type="search" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:time\n	<input type="time" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:url\n	<input type="url" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:week\n	<input type="week" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet ins\n	<ins>${1}</ins>\nsnippet kbd\n	<kbd>${1}</kbd>\nsnippet keygen\n	<keygen>${1}</keygen>\nsnippet label\n	<label for="${2:$1}">${1}</label>\nsnippet label:i\n	<label for="${2:$1}">${1}</label>\n	<input type="${3:text/submit/hidden/button}" name="${4:$2}" id="${5:$2}" value="${6}" />${7}\nsnippet label:s\n	<label for="${2:$1}">${1}</label>\n	<select name="${3:$2}" id="${4:$2}">\n		<option value="${5}">${6:$5}</option>\n	</select>\nsnippet legend\n	<legend>${1}</legend>\nsnippet legend+\n	<legend><span>${1}</span></legend>\nsnippet li\n	<li>${1}</li>\nsnippet li.\n	<li class="${1}">${2}</li>\nsnippet li+\n	<li>${1}</li>\n	li+${2}\nsnippet lia\n	<li><a href="${2:#}">${1}</a></li>\nsnippet lia+\n	<li><a href="${2:#}">${1}</a></li>\n	lia+${3}\nsnippet link\n	<link rel="${1}" href="${2}" title="${3}" type="${4}" />${5}\nsnippet link:atom\n	<link rel="alternate" href="${1:atom.xml}" title="Atom" type="application/atom+xml" />${2}\nsnippet link:css\n	<link rel="stylesheet" href="${2:style.css}" type="text/css" media="${3:all}" />${4}\nsnippet link:favicon\n	<link rel="shortcut icon" href="${1:favicon.ico}" type="image/x-icon" />${2}\nsnippet link:rss\n	<link rel="alternate" href="${1:rss.xml}" title="RSS" type="application/atom+xml" />${2}\nsnippet link:touch\n	<link rel="apple-touch-icon" href="${1:favicon.png}" />${2}\nsnippet map\n	<map name="${1}">\n		${2}\n	</map>\nsnippet map.\n	<map class="${1}" name="${2}">\n		${3}\n	</map>\nsnippet map#\n	<map name="${1}" id="${2:$1}>\n		${3}\n	</map>\nsnippet map+\n	<map name="${1}">\n		<area shape="${2}" coords="${3}" href="${4}" alt="${5}" />${6}\n	</map>${7}\nsnippet mark\n	<mark>${1}</mark>\nsnippet menu\n	<menu>\n		${1}\n	</menu>\nsnippet menu:c\n	<menu type="context">\n		${1}\n	</menu>\nsnippet menu:t\n	<menu type="toolbar">\n		${1}\n	</menu>\nsnippet meta\n	<meta http-equiv="${1}" content="${2}" />${3}\nsnippet meta:compat\n	<meta http-equiv="X-UA-Compatible" content="IE=${1:7,8,edge}" />${3}\nsnippet meta:refresh\n	<meta http-equiv="refresh" content="text/html;charset=UTF-8" />${3}\nsnippet meta:utf\n	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />${3}\nsnippet meter\n	<meter>${1}</meter>\nsnippet nav\n	<nav>\n		${1}\n	</nav>\nsnippet nav.\n	<nav class="${1}">\n		${2}\n	</nav>\nsnippet nav#\n	<nav id="${1}">\n		${2}\n	</nav>\nsnippet noscript\n	<noscript>\n		${1}\n	</noscript>\nsnippet object\n	<object data="${1}" type="${2}">\n		${3}\n	</object>${4}\n# Embed QT Movie\nsnippet movie\n	<object width="$2" height="$3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"\n	 codebase="http://www.apple.com/qtactivex/qtplugin.cab">\n		<param name="src" value="$1" />\n		<param name="controller" value="$4" />\n		<param name="autoplay" value="$5" />\n		<embed src="${1:movie.mov}"\n			width="${2:320}" height="${3:240}"\n			controller="${4:true}" autoplay="${5:true}"\n			scale="tofit" cache="true"\n			pluginspage="http://www.apple.com/quicktime/download/" />\n	</object>${6}\nsnippet ol\n	<ol>\n		${1}\n	</ol>\nsnippet ol.\n	<ol class="${1}>\n		${2}\n	</ol>\nsnippet ol#\n	<ol id="${1}>\n		${2}\n	</ol>\nsnippet ol+\n	<ol>\n		<li>${1}</li>\n		li+${2}\n	</ol>\nsnippet opt\n	<option value="${1}">${2:$1}</option>\nsnippet opt+\n	<option value="${1}">${2:$1}</option>\n	opt+${3}\nsnippet optt\n	<option>${1}</option>\nsnippet optgroup\n	<optgroup>\n		<option value="${1}">${2:$1}</option>\n		opt+${3}\n	</optgroup>\nsnippet output\n	<output>${1}</output>\nsnippet p\n	<p>${1}</p>\nsnippet param\n	<param name="${1}" value="${2}" />${3}\nsnippet pre\n	<pre>\n		${1}\n	</pre>\nsnippet progress\n	<progress>${1}</progress>\nsnippet q\n	<q>${1}</q>\nsnippet rp\n	<rp>${1}</rp>\nsnippet rt\n	<rt>${1}</rt>\nsnippet ruby\n	<ruby>\n		<rp><rt>${1}</rt></rp>\n	</ruby>\nsnippet s\n	<s>${1}</s>\nsnippet samp\n	<samp>\n		${1}\n	</samp>\nsnippet script\n	<script type="text/javascript" charset="utf-8">\n		${1}\n	<\/script>\nsnippet scriptsrc\n	<script src="${1}.js" type="text/javascript" charset="utf-8"><\/script>\nsnippet newscript\n	<script type="application/javascript" charset="utf-8">\n		${1}\n	<\/script>\nsnippet newscriptsrc\n	<script src="${1}.js" type="application/javascript" charset="utf-8"><\/script>\nsnippet section\n	<section>\n		${1}\n	</section>\nsnippet section.\n	<section class="${1}">\n		${2}\n	</section>\nsnippet section#\n	<section id="${1}">\n		${2}\n	</section>\nsnippet select\n	<select name="${1}" id="${2:$1}">\n		${3}\n	</select>\nsnippet select.\n	<select name="${1}" id="${2:$1}" class="${3}>\n		${4}\n	</select>\nsnippet select+\n	<select name="${1}" id="${2:$1}">\n		<option value="${3}">${4:$3}</option>\n		opt+${5}\n	</select>\nsnippet small\n	<small>${1}</small>\nsnippet source\n	<source src="${1}" type="${2}" media="${3}" />\nsnippet span\n	<span>${1}</span>\nsnippet strong\n	<strong>${1}</strong>\nsnippet style\n	<style type="text/css" media="${1:all}">\n		${2}\n	</style>\nsnippet sub\n	<sub>${1}</sub>\nsnippet summary\n	<summary>\n		${1}\n	</summary>\nsnippet sup\n	<sup>${1}</sup>\nsnippet table\n	<table border="${1:0}">\n		${2}\n	</table>\nsnippet table.\n	<table class="${1}" border="${2:0}">\n		${3}\n	</table>\nsnippet table#\n	<table id="${1}" border="${2:0}">\n		${3}\n	</table>\nsnippet tbody\n	<tbody>\n		${1}\n	</tbody>\nsnippet td\n	<td>${1}</td>\nsnippet td.\n	<td class="${1}">${2}</td>\nsnippet td#\n	<td id="${1}">${2}</td>\nsnippet td+\n	<td>${1}</td>\n	td+${2}\nsnippet textarea\n	<textarea name="${1}" id=${2:$1} rows="${3:8}" cols="${4:40}">${5}</textarea>${6}\nsnippet tfoot\n	<tfoot>\n		${1}\n	</tfoot>\nsnippet th\n	<th>${1}</th>\nsnippet th.\n	<th class="${1}">${2}</th>\nsnippet th#\n	<th id="${1}">${2}</th>\nsnippet th+\n	<th>${1}</th>\n	th+${2}\nsnippet thead\n	<thead>\n		${1}\n	</thead>\nsnippet time\n	<time datetime="${1}" pubdate="${2:$1}>${3:$1}</time>\nsnippet title\n	<title>${1:`substitute(Filename(\'\', \'Page Title\'), \'^.\', \'\\u&\', \'\')`}</title>\nsnippet tr\n	<tr>\n		${1}\n	</tr>\nsnippet tr+\n	<tr>\n		<td>${1}</td>\n		td+${2}\n	</tr>\nsnippet track\n	<track src="${1}" srclang="${2}" label="${3}" default="${4:default}>${5}</track>${6}\nsnippet ul\n	<ul>\n		${1}\n	</ul>\nsnippet ul.\n	<ul class="${1}">\n		${2}\n	</ul>\nsnippet ul#\n	<ul id="${1}">\n		${2}\n	</ul>\nsnippet ul+\n	<ul>\n		<li>${1}</li>\n		li+${2}\n	</ul>\nsnippet var\n	<var>${1}</var>\nsnippet video\n	<video src="${1} height="${2}" width="${3}" preload="${5:none}" autoplay="${6:autoplay}>${7}</video>${8}\nsnippet wbr\n	<wbr />${1}\n',t.scope="html"});
                (function() {
                    window.require(["ace/snippets/html"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            