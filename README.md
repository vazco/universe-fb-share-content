# Universe Fb share content

```
import {init, sharePost} from 'meteor/universe:fb-share-content';

// appId - App Id for account, you can generate it here: https://developers.facebook.com/apps/
// from  - Page Id (optional), usually it is a numeric part of page in url.
//   eg.: url https://www.facebook.com/Alamakota-1051044138316890 has: 1051044138316890
init({appId: 132334617192845, from: 1051044138316890});

sharePost('title', 'description', 'http://link');
```
