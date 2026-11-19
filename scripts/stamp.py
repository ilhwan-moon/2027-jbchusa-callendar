"""배포 전에 실행: 화면 파일 주소에 버전(?v=)을 붙이고 version.json을 만듭니다.
카톡 같은 앱 안 브라우저가 예전 파일을 보여 주는 것을 막기 위함입니다.
사용: python3 scripts/stamp.py"""
import re, time, json, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
v = time.strftime('%Y%m%d%H%M%S')
p = root / 'index.html'
s = p.read_text()
s = re.sub(r'(href="styles\.css|src="(?:data|icshelp|wallpaper|app)\.js)(\?v=\w+)?"', lambda m: m.group(1) + '?v=' + v + '"', s)
s = re.sub(r'<meta name="build" content="\w*">', f'<meta name="build" content="{v}">', s)
p.write_text(s)
(root / 'version.json').write_text(json.dumps({'v': v}) + '\n')
print('build', v)
