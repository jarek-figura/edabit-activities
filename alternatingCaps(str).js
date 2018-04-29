const alternatingCaps = str => str.toUpperCase().split('').map((s, index) => index % 2 !== 0 ? s.toLowerCase() : s).join('');

console.log(alternatingCaps('alternating caps')); //    'AlTeRnAtInG CaPs');
console.log(alternatingCaps("Hello, what's your name?")); //     "HeLlO, wHaT'S YoUr nAmE?"
console.log(alternatingCaps('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'));  //    'LoReM IpSuM DoLoR SiT AmEt, CoNsEcTeTuR AdIpIsIcInG ElIt.'
console.log(alternatingCaps('OMG!!! This website is awesome!!')); //    'OmG!!! tHiS WeBsItE Is aWeSoMe!!'
console.log(alternatingCaps('The quick brown fox jumps over the lazy dog'));  //    'ThE QuIcK BrOwN FoX JuMpS OvEr tHe lAzY DoG'
console.log(alternatingCaps('The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.'));
    // 'ThE InTeNt iS To pRoViDe pLaYeRs wItH A SeNsE Of pRiDe aNd aCcOmPlIsHmEnT FoR UnLoCkInG DiFfErEnT HeRoEs.'