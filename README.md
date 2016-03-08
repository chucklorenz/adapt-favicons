# adapt-favicons  
    
**Favicons** is an *extension* intended to be used with the [Adapt framework] (https://github.com/adaptlearning/adapt_framework) and the   
[Adapt authoring tool] (https://github.com/adaptlearning/adapt_authoring). It creates links in the page head to favicon images. 
##Installation

* To install in the Adapt framework:  
With the [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run the following from the command line:  
`adapt install adapt-favicons`

    Alternatively, this component can also be installed by adding the following line of code to the *adapt.json* file:  
    `"adapt-favicons": "*"`  
    Then running the command:  
    `adapt install`  
    (This second method will reinstall all plug-ins listed in *adapt.json*.)  

* To install in the Adapt authoring tool:  
Download **Favicons** using the "Download ZIP" button in the **Favicons** GitHub repository. Upload the zipped archive using the authroing tool's [Plug-in Manager](https://github.com/adaptlearning/adapt_authoring/wiki/Plugin-Manager).  

## Settings Overview

The attributes listed below are used in *course.json* to configure **Favicons**, and are properly formatted as JSON in [*example.json*](https://github.com/chucklorenz/adapt-favicons/blob/master/example.json). Visit the [**Favicon** wiki](https://github.com/chucklorenz/adapt-favicons/wiki) for more information about how they appear in the [authoring tool](https://github.com/adaptlearning/adapt_authoring/wiki). 

### Attributes

**_favicons** (object): The Favicons object that contains values for **_src**, **_rel**, **_type**,  and **_sizes**.  

>**_src** (string): This is the path to the favicon image, e.g., 'course/en/images/icons/icon-apple-touch-144x144.png' or ''.  

>**_rel** (string): The value of the 'rel' attribute is typically one of the following: 'shortcut icon', 'apple-touch-icon', 'apple-touch-icon-precomposed'.  

>**_type** (string):  The mime type for icons is based on the file format of the favicon. For PNG, use 'image/png'. For GIF, use 'image/gif'. For ICO, use 'image/x-icon'. You are free to use an alternative, such as 'image/vnd.microsoft.icon'. The value you provide here is simply transferred to the 'rel' attribute.

>**_sizes** (string): The dimension of the favicon, e.g., '144x144'. This optional attribute is used in conjunction with 'apple-touch-icon'. Read more at

<div float align=right><a href="#top">Back to Top</a></div>

## Limitations
 
No known limitations.  

----------------------------
**Version number:**  1.0  
**Framework versions:** ^2.0      
**Author / maintainer:** Chuck Lorenz  
**Accessibility support:** NA   
**RTL support:** NA  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), IE 11, IE10, IE9, IE8, IE Mobile 11, Safari for iPhone (iOS 7+8), Safari for iPad (iOS 7+8), Safari 8, Opera    
