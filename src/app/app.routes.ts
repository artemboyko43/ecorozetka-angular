import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { PublicOfferComponent } from './public-offer/public-offer.component';
import { PublicAccessAgreementComponent } from './public-access-agreement/public-access-agreement.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'privacy-policy', component: PrivatePolicyComponent },
    // { path: 'public-offer', component: PublicOfferComponent },
    { path: 'public-access-agreement', component: PublicAccessAgreementComponent },
];
