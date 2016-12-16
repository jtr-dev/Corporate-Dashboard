import {Component} from '@angular/core';



@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'tables.component.html'
})

export class TableComponent {

	//setTimeout push newIssue
	

	newIssue: any = {
			repo: 'Eu recusandae ',
			issue: 'Lorem ipsum dolor sit amet.',
			comment: ' Elementum lobortis quam eleifend donec est odio, ultricies turpis hymenaeos eget lectus, feugiat aliquam metus vel sit nulla. Vestibulum lectus diamlorem morbi eu, deserunt sit id congue vestibulum in vivamus, sociosqu sit mollis ut praesent nulla. Sapien vitae ad placerat ipsum, justo arcu egestas sem pellentesque feugiat morbi, integer hymenaeos, donec sollicitudin quam, eleifend nulla iaculis eget elit. Magna minus donec etiam ante porta, ut sit volutpat sed nulla tempor cras, convallis risus mauris nam magna wisi, hendrerit dui mauris tincidunt integer in a.'
		}


	tableList: any = [
		{
			repo: 'Eu recusandae ',
			issue: 'Lorem ipsum dolor sit amet.',
			comment: ' Elementum lobortis quam eleifend donec est odio, ultricies turpis hymenaeos eget lectus, feugiat aliquam metus vel sit nulla. Vestibulum lectus diamlorem morbi eu, deserunt sit id congue vestibulum in vivamus, sociosqu sit mollis ut praesent nulla. Sapien vitae ad placerat ipsum, justo arcu egestas sem pellentesque feugiat morbi, integer hymenaeos, donec sollicitudin quam, eleifend nulla iaculis eget elit. Magna minus donec etiam ante porta, ut sit volutpat sed nulla tempor cras, convallis risus mauris nam magna wisi, hendrerit dui mauris tincidunt integer in a.'
		},{
			repo: 'lacus quam nunc eget',
			issue: 'Lorem ipsum dolor sit amet.',
			comment: ' Elementum lobortis quam eleifend donec est odio, ultricies turpis hymenaeos eget lectus, feugiat aliquam metus vel sit nulla. Vestibulum lectus diamlorem morbi eu, deserunt sit id congue vestibulum in vivamus, sociosqu sit mollis ut praesent nulla. Sapien vitae ad placerat ipsum, justo arcu egestas sem pellentesque feugiat morbi, integer hymenaeos, donec sollicitudin quam, eleifend nulla iaculis eget elit. Magna minus donec etiam ante porta, ut sit volutpat sed nulla tempor cras, convallis risus mauris nam magna wisi, hendrerit dui mauris tincidunt integer in a.'
		},{
			repo: 'Nec porta molestie in',
			issue: 'Lorem ipsum dolor sit amet.',
			comment: ' Elementum lobortis quam eleifend donec est odio, ultricies turpis hymenaeos eget lectus, feugiat aliquam metus vel sit nulla. Vestibulum lectus diamlorem morbi eu, deserunt sit id congue vestibulum in vivamus, sociosqu sit mollis ut praesent nulla. Sapien vitae ad placerat ipsum, justo arcu egestas sem pellentesque feugiat morbi, integer hymenaeos, donec sollicitudin quam, eleifend nulla iaculis eget elit. Magna minus donec etiam ante porta, ut sit volutpat sed nulla tempor cras, convallis risus mauris nam magna wisi, hendrerit dui mauris tincidunt integer in a.'
		},{
			repo: 'Leo interdum lectus elementum',
			issue: 'Lorem ipsum dolor sit amet.',
			comment: ' Elementum lobortis quam eleifend donec est odio, ultricies turpis hymenaeos eget lectus, feugiat aliquam metus vel sit nulla. Vestibulum lectus diamlorem morbi eu, deserunt sit id congue vestibulum in vivamus, sociosqu sit mollis ut praesent nulla. Sapien vitae ad placerat ipsum, justo arcu egestas sem pellentesque feugiat morbi, integer hymenaeos, donec sollicitudin quam, eleifend nulla iaculis eget elit. Magna minus donec etiam ante porta, ut sit volutpat sed nulla tempor cras, convallis risus mauris nam magna wisi, hendrerit dui mauris tincidunt integer in a.'
		},{
			repo: 'Illum orci metus dictum',
			issue: 'Lorem ipsum dolor sit amet.',
			comment: ' Elementum lobortis quam eleifend donec est odio, ultricies turpis hymenaeos eget lectus, feugiat aliquam metus vel sit nulla. Vestibulum lectus diamlorem morbi eu, deserunt sit id congue vestibulum in vivamus, sociosqu sit mollis ut praesent nulla. Sapien vitae ad placerat ipsum, justo arcu egestas sem pellentesque feugiat morbi, integer hymenaeos, donec sollicitudin quam, eleifend nulla iaculis eget elit. Magna minus donec etiam ante porta, ut sit volutpat sed nulla tempor cras, convallis risus mauris nam magna wisi, hendrerit dui mauris tincidunt integer in a.'
		},
	]

}
