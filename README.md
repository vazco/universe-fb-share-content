<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe FB Share Content
</h1>

&nbsp;

```
import {init, sharePost} from 'meteor/universe:fb-share-content';

// appId - App Id for account, you can generate it here: https://developers.facebook.com/apps/
// from  - Page Id (optional), usually it is a numeric part of page in url.
//   eg.: url https://www.facebook.com/Alamakota-1051044138316890 has: 1051044138316890

init({appId: 132334617192845, from: 1051044138316890});

sharePost('title', 'description', 'http://link');
```

### License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe FB Share Content is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
