from html.parser import HTMLParser
from pathlib import Path

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.skip = ('script', 'style')
        self.tagstack = []
    def handle_starttag(self, tag, attrs):
        self.tagstack.append(tag)
    def handle_endtag(self, tag):
        if self.tagstack and self.tagstack[-1] == tag:
            self.tagstack.pop()
    def handle_data(self, data):
        if any(t in self.skip for t in self.tagstack):
            return
        text = data.strip()
        if text:
            self.texts.append(text)

parser = TextExtractor()
html = Path('index.html').read_text(encoding='utf-8')
parser.feed(html)
from collections import Counter
for text, count in Counter(parser.texts).most_common():
    print(repr(text))
