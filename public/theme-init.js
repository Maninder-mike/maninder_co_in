// FOUC prevention: applies dark class before first paint based on stored preference
(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(s==='dark'||(!s||s==='system')&&d){document.documentElement.classList.add('dark')}}catch(e){}})();
