# Universe Fb share content

```
import {init, sharePost} from 'meteor/universe:fb-share-content';

//App Id for account,
// from - it is a numeric part of page eg.: url https://www.facebook.com/Alamakota-1051044138316890 has: 1051044138316890
init({appId: 132334617192845, from: 1051044138316890});

sharePost('title', 'description', 'http://link');
```