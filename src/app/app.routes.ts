import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { PublicOfferComponent } from './public-offer/public-offer.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'private-policy', component: PrivatePolicyComponent },
    { path: 'public-offer', component: PublicOfferComponent },
];
