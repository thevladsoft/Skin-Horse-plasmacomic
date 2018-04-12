/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA .        *
 ***************************************************************************/
 
function init()
{
    comic.comicAuthor = "Shaenon K. Garrity";
    comic.firstIdentifier = "2007-12-30";
    comic.websiteUrl = "http://skin-horse.com/";
    url = "http://skin-horse.com/";

    //url += "/comics/" + comic.identifier.toString("yyyy-MM-dd"+"");
    url += "comics/";

//print("****"+url);
    comic.requestPage(url, comic.Page);

}
 
function pageRetrieved(id, data)
{

    var match,match2
    var url;
    var dat = comic.identifier.toString("yyyy-MM-dd");
    //print(comic.identifier.toString("yyyy-MM-dd"));
    //print("\n\npageretrieved\n");
    //comic.identifier = today.date;
    //print("99999"+comic.identifier.date);
    //print("99999"+dat);
    //var re = new RegExp("http://skin-horse.com/comics/([^\\.]+\\.jpg)");
    
    if(id == comic.User){
      var re = new RegExp("<img src=\"(http://skin-horse.com/wp-content/uploads[^\"]*)\" alt=");
      print("nooooo!");
      print(re);
      match = re.exec(data);
      print(match[1]);
      if (match != null) {
	print("siiiii!");
	url = match[1];
        comic.requestPage(url, comic.Image);
	print(url);
      }else{
         comic.error();
         return;
      }
    }
    if(id == comic.Page){
	var re = new RegExp("("+dat+"[^\\.]*\\.jpg)");
	var re2 = new RegExp("("+dat+"[^\\.]*\\.png)");
	//print(data);
	//print(re.exec(data));
	    
	match = re.exec(data);
	//print(">>>>"+match[0]+"    "+match[1])
	if (match != null) {
	url = comic.websiteUrl+"comics/"+match[1];
	comic.requestPage(url, comic.Image);
	  //print("Nooooo");
	  //comic.error();
	  //return;
	} else {
          print("nooooo!")
	  match2 = re2.exec(data);
	  if (match2 != null) {
	    url = comic.websiteUrl+"comics/"+match2[1];print(url);
	    comic.requestPage(url, comic.Image);
	  }
	  else{print("siiiii!");
	      //url = comic.websiteUrl+"comics/"+dat+".jpg";
	      //print(url);
	      print("At least look for today's comic.");
	      comic.requestPage("http://skin-horse.com/", comic.User);
//               comic.error();
//  	      return;
	  }
	}
    }
    
//     url = comic.websiteUrl+"comics/"+dat+match[1];
//     url="http://skin-horse.com/comics/" + match[1];
//  	print("-------"+url);

    //if (id == comic.Page) {
    //if (match != null) {
      
//       print("ooooo!");print(url);
//  	comic.requestPage(url, comic.Image);

    //} else {
      //          comic.error();
      //          return;
    //}
//     url="http://skin-horse.com/comics/2012-07-28said_Sweetheart.jpg";
//     print("-------"+comic.websiteUrl);
//     comic.requestPage("http://skin-horse.com/comics/2012-07-28said_Sweetheart.jpg", comic.Image);
//     comic.error();
}

