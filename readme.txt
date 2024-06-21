npx sequelize-cli model:generate --name Authorization --attributes login_user_name:string,login_user_password:string,refresh_token:string,login_name:string,login_chinese_name:string,login_email:string,login_company_name:string,login_dept_id:integer,access_bo:integer,access_ext:integer,access_b2b:integer,login_role_id:integer,login_status:integer,login_active:integer,last_logged_in:date,login_branch_id:integer,owner:string,is_sales_markup:integer,is_2nd_markup:integer,is_blocked:integer,is_released:integer,is_approve_land:integer,is_final_approve_land:integer,is_approve_hotel:integer,is_final_approve_hotel:integer,is_markup_extend:integer,is_read_price_booking:integer,is_address:string,export_excel:string,images:string,is_status_channel:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name Agent --attributes agent_code:string,agent_name:string,agent_chinese_name:string,branch_id:integer,country_id:integer,city_id:integer,address1:string,address2:string,address3:string,zip_code:string,phone_number:string,fax_no:string,email:string,web_url:string,payment_id:integer,credit_day:integer,currency_id:integer,vat_type_id:integer,license_no:string,bank_account:string,agent_group_id:integer,cancel_days:integer,service_man:integer,sales_handling:integer,logo_file_name:string,active_status:integer,active_image:integer,agent_type_id:integer,bank_status:string,credit_limit:double,sales_handling_service:integer,api_key:string,credit_used:double,region_id:integer,sabah_handling:integer,transfer_dot_com:integer,close_sales:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name ActivityLogUser --attributes activity:string,username:string,page_url:string,ip_user:string,activity_date:date,booking_no:string,booking_status_id:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name AgentChatConnection --attributes agent_connection_id:string,agent_name:string,connected:integer,date_connection:date

npx sequelize-cli model:generate --name AgentContact --attributes contact_id:integer,agent_id:integer,title:string,first_name:string,last_name:string,position:string,phone_number:string,mobile_number:string,email:string,fax:string,username:string,password:string,is_document_received:integer,is_active:integer,level_access:integer,last_logged_in:date,is_delete:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name AgentCountryHandling --attributes agent_country_id:integer,agent_id:integer,country_id:integer,remarks:string,remarks_internal:string,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name AgentHotelAvailable --attributes agent_id:integer,hotel_id:integer,region_id:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name AgentLandserviceAvailable --attributes agent_id:integer,vendor_id:integer,region_id:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name AgentMarkupHotel --attributes agent_id:integer,currency_id:integer,markup_type_id:integer,is_from_sell_price:integer,single_num:double,double_num:double,extrabed_num:double,extrabed_package_num:double,children_num:double,infant_num:double,benefit_num:double,remarks:string,remarks_internal:string,is_delete:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name Markup_Agent_Hotel --attributes markup_id:integer,hotel_id:integer,region_id:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name AgentMarkupLandService --attributes agent_id:integer,currency_id:integer,markup_type_id:integer,is_from_sell_price:integer,adult:double,children:double,infant:double,vehicle:double,remarks:string,remarks_internal:string,is_delete:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name Markup_Agent_LandService --attributes markup_id:integer,vendor_id:integer,region_id:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name AgentProductsHistory --attributes agent_id:integer,tariff_id:integer,email_date:date,email_by:string

npx sequelize-cli model:generate --name AgentRegionHandling --attributes agent_id:integer,region_id:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name AgentRemark --attributes agent_id:integer,remark:string,remark_internal:string,is_delete:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name Allotment --attributes allotment_main_id:integer,allotment_code:string,allotment_name:string,hotel_id:integer,room_cat_id:integer,allotment_date:date,gen_allot:integer,get_cod:integer,fix1_allot:integer,fix1_cod:integer,fix2_allot:integer,fix2_code:integer,is_close_out:integer,is_no_arrival:integer,is_no_departure:integer,used:integer,is_active:integer,region_id:integer,is_free_sale:integer,gen_allot_free_sale:integer,init_gen_allot_free_sale:integer,is_delete:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name AuthorizationRole --attributes login_id:integer,menu_id:integer,role_update:integer,role_insert:integer,role_delete:integer,role_read:integer

npx sequelize-cli model:generate --name Banner --attributes product_cat_id:integer,hotel_vendor_id:integer,image_name:string,image_title:string,area_id:integer,link_address:string,is_delete:integer

npx sequelize-cli model:generate --name BannerArea --attributes area_name:string

npx sequelize-cli model:generate --name FileNoRelease --attributes file_no:string,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name FrontPage --attributes logo_name:string,logo_title:string,left_vendor_id1:integer,left_image_name1:string,left_image_title1:string,left_vendor_id2:integer,left_image_name2:string,left_image_title2:string,left_vendor_id3:integer,left_image_name3:string,left_image_title3:string,left_vendor_id4:integer,left_image_name4:string,left_image_title4:string,right_vendor_id1:integer,right_image_name1:string,right_image_title1:string,right_vendor_id2:integer,right_image_name2:string,right_image_title2:string,right_vendor_id3:integer,right_image_name3:string,right_image_title3:string,right_vendor_id4:integer,right_image_name4:string,right_image_title4:string,slider_hotel_id1:integer,slider_image_name1:string,slider_image_title1:string,slider_hotel_id2:integer,slider_image_name2:string,slider_image_title2:string,slider_hotel_id3:string,slider_image_name3:string,slider_image_title3:string,slider_hotel_id4:string,slider_image_name4:string,slider_image_title4:string,slider_hotel_id5:string,slider_image_name5:string,slider_image_title5:string,slider_hotel_id6:integer,slider_image_name6:string,slider_image_title6:string,slider_hotel_id7:integer,slider_image_name7:string,slider_image_title7:string,slider_hotel_id8:integer,slider_image_name8:string,slider_image_title8:string,hotel_id1:integer,hotel_image_name1:string,hotel_image_title1:string,hotel_id2:integer,hotel_image_name2:string,hotel_image_title2:string,hotel_id3:integer,hotel_image_name3:string,hotel_image_title3:string,hotel_id4:integer,hotel_image_name4:string,hotel_image_title4:string,hotel_id5:integer,hotel_image_name5:string,hotel_image_title5:string,hotel_id6:integer,hotel_image_name6:string,hotel_image_title6:integer,hotel_id7:integer,hotel_image_name7:string,hotel_image_title7:string,hotel_id8:integer,hotel_image_name8:string,hotel_image_title8:string,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name MainProduct --attributes hotel_id:integer,date_from:date,date_to:date,product_cat_id:integer,tariff_id:integer,simillar_name:string,iamge_name:string,image_text:string,remarks:string,is_active:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name MainProductHistory --attributes list_id:integer,hotel_id:integer,date_from:date,date_to:date,product_cat_id:integer,tariff_id:integer,simillar_name:string,remarks:string,task_name:string,taskBy:string,task_date:date

npx sequelize-cli model:generate --name MainProductLang --attributes product_id:integer,simillar_name:string,remarks:string,lang_id:integer

npx sequelize-cli model:generate --name PageContent --attributes content_name:string,content_title:string,content_image:string,content_category_id:integer,is_delete:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name PageContentCategory --attributes content_category:string,content_type_id:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name PageContentDetail --attributes content_id:integer,content_detail_title:string,content_detail_image:string,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name PageContentDetailLang --attributes content_detail_id:integer,content_detail_slider:string,language_id:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name PageContentLang --attributes content_id:integer,content_left:string,content_right:string,language_id:integer,is_delete:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name WeekDay --attributes day_names:string

npx sequelize-cli model:generate --name BreakfastType --attributes breakfast_type:string

npx sequelize-cli model:generate --name BookingAddCharge --attributes booking_trx_id:integer,charge_id:integer,add_charge_description:string,nett_curr_id:integer,nett_room:double,nett_adult:double,nett_child:double,sell_curr_id:integer,sell_room:double,sell_adult:double,sell_child:double,is_compulsary:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingAddChargeOptional --attributes booking_no:integer,charge_id:integer,charge_description:string,room_no:integer,day_of_date:date,nett_curr_id:integer,nett_room:double,nett_adult:double,nett_child:double,sell_curr_id:integer,sell_room:double,sell_adult:double,sell_child:double,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingCancellationFee --attributes booking_no:integer,currency_id:integer,cancellation_fee:double,is_payment:integer,cancel_type_id:integer,cancel_amount:double,order_main_id:integer,charge_id:integer,is_manual_insert:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingClient --attributes booking_no:string,client_id:integer,file_no:string,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingCODHistory --attributes booking_no:integer,cod:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingExchangeRate --attributes booking_no:integer,currency_id:integer,buying_rate:double,selling_rate:double,buying_exchange_rate:double,selling_exchange_rate:double,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingMain --attributes order_no:string,file_no:string,voucher_no:string,agent_id:integer,hotel_id:integer,arrival_date:date,departure_date:date,room_cat_id:integer,rate_id:integer,total_room:integer,cod:integer,booking_status_id:integer,original_booking_status_id:integer,booking_date:date,bookedBy:string,pax_pass_id:integer,confirm_number:string,remarks:string,remarks_internal:string,product_cat_id:integer,is_complete:integer,breakfast_type_id:integer,booked_byTMS:integer,hotel_pickup:string,order_main_id:integer,including:string,excluding:string,agent_booking_no:string,region_id:integer,hotel_drop_off:string,time_booking:string,time_confirm:date,transfer_to_master:integer,time_schedule_id:integer,time_preferred:string,promotion_id:integer,quotation_id:integer,days:integer,is_source_land:integer,is_already_paid:integer,is_delete:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingMainHistory --attributes order_no:string,booking_status_id:integer,remarks:string,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingMainUpdated --attributes booking_no:integer,order_no:string

npx sequelize-cli model:generate --name BookingMessage --attributes booking_no:integer,message:string,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingNettPrice --attributes booking_no:integer,nett_price:double,selling_price:double,promo_id:integer,charge_value:double,org_nett_price_ex_promo:double,discount_Type_id:integer

npx sequelize-cli model:generate --name BookingProductLandservice --attributes booking_no:integer,tariff_id:integer,product_cat_id:integer,product_cat_name:string,product_type_id:integer,product_type_name:string,product_name:string,vendor_id:integer,vendor_name:string,nett_adult_price:double,nett_child_price:double,nett_infant_price:double,nett_curr_id:integer,nett_curr_code:string,vendor_address:string,vendor_phone:string,vendor_country:string,vendor_city:string,vendor_email_contact:string,nett_vehicle_price:double,nett_child2_price:double,sell_curr_id:integer,sell_curr_code:string,sell_adult_price:double,sell_child_price:double,sell_child2_price:double,sell_infant_price:double,sell_vehicle_price:double,image_name:string,star:integer,vendor_code:string,full_description:string,booking_arragement_notes:string,allotment_cid:integer,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingPromo --attributes booking_no:integer,promotion_id:integer,promotion_label:string,promotion_description:string

npx sequelize-cli model:generate --name BookingRateCode --attributes booking_no:integer,tariff_id:integer,rate_code:string,createdBy:string,updatedBy:string

npx sequelize-cli model:generate --name BookingRemark --attributes booking_no:integer,remarks_id:integer,tariff_id:integer,remarks:string,remarks_internal:string,language_id:integer,createdBy:string,updatedBy:string



npx sequelize-cli db:migrate --name 20240619074027-create-booking-remark.js