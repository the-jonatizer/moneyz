import { Model } from '@vuex-orm/core';
import { uuidv4 } from '@/utils/helpers';
import BankAccount from '@/store/models/bank-account';

export default class Client extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'clients';

  static fields() {
    return {
      id: this.attr(() => uuidv4()),
      company_name: this.attr(''),
      company_address: this.attr(''),
      company_postal_code: this.attr(''),
      company_country: this.attr(''),
      company_county: this.attr(''),
      company_city: this.attr(''),
      company_reg_no: this.attr(''),
      company_vat_no: this.attr(''),
      has_vat: this.attr(null),
      currency: this.attr(null),
      rate: this.attr(null),
      invoice_email: this.attr(''),
      bank_account_id: this.attr(null),
      bank_account: this.belongsTo(BankAccount, 'bank_account_id', 'id'),
      updated_at: this.attr(''),
      created_at: this.attr(''),
    };
  }
}
