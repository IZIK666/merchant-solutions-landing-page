# HubSpot Integration Setup Guide

## ✅ You're Connected!

Your landing page is now **directly integrated with HubSpot CRM**.

---

## 🎯 How It Works

### Flow:
```
Visitor fills form on landing page
         ↓
Form data sent to your API
         ↓
API creates contact in HubSpot CRM automatically
         ↓
Contact appears in your HubSpot dashboard
         ↓
You can automate follow-ups, emails, tasks
```

---

## 📋 What Gets Sent to HubSpot

Each lead submission includes:
- **First Name** - From company name
- **Last Name** - From company name (if available)
- **Email** - Business email
- **Phone** - Contact phone
- **Company** - Company name
- **Country** - Country of operation
- **Industry** - Business industry
- **Lifecycle Stage** - Set to "lead"
- **Lead Status** - Set to "NEW"

---

## 🔧 Configuration

### Verify Your Settings:
1. Check `.env.local` has:
   ```
   HUBSPOT_PRIVATE_APP_TOKEN=pat-eu1-ea4f68ed-69f5-4272-b6e7-bef641f68601
   NEXT_PUBLIC_HUBSPOT_HUB_ID=148698905
   ```

2. Verify in HubSpot:
   - Settings → Integrations → Private apps
   - Your app has these permissions:
     - `crm.objects.contacts.write`
     - `crm.objects.contacts.read`

---

## 📊 Next Steps in HubSpot

### 1. Set Up Automation Workflows
Go to HubSpot → Automation → Workflows

Create workflows for:
- **Welcome Email** - Send 1 hour after form submission
- **Follow-up Email** - Send 24 hours later
- **Task Creation** - Remind your team to call
- **Conditional Actions** - Different workflows by industry

### 2. Create Sequences
- Go to HubSpot → Sequences
- Create email sequence for new leads
- Set up automatic follow-ups

### 3. Set Up Sales Tools
- Enable Call Recording
- Add Gmail or Outlook integration
- Enable SMS tracking

---

## 🔔 Email Notifications

You also receive email notifications for each lead:
- To: `merchant.solutions@atomicmail.io`
- Includes: Company, email, phone, country, industry
- Subject: "🚀 New merchant lead: [Company Name]"

---

## 📱 Mobile Optimization

Your sticky CTA buttons:
- **Phone** - Direct call button (update number)
- **WhatsApp** - Quick chat (update number)

Update these in `components/sticky-cta.tsx`:
```typescript
<a href="tel:YOUR_PHONE_NUMBER">
<a href="https://wa.me/YOUR_NUMBER?text=...">
```

---

## 🎯 Tracking & Analytics

Integrated tracking for:
- **Facebook Pixel** - For retargeting ads
- **Google Analytics** - For traffic analysis
- **LinkedIn Insights** - For B2B targeting

Configure your pixel IDs in `.env.local`:
```
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=YOUR_ID
NEXT_PUBLIC_GA_ID=YOUR_ID
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=YOUR_ID
```

---

## 🚀 Launch Checklist

- [ ] Update phone number in sticky CTA
- [ ] Update WhatsApp number
- [ ] Test form submission (check HubSpot)
- [ ] Set up HubSpot workflows
- [ ] Add pixel IDs for tracking
- [ ] Test on mobile device
- [ ] Deploy to production

---

## ⚡ Tips for Success

1. **Response Speed** - Respond within 5 minutes (sticky CTA says this)
2. **Lead Qualification** - Use HubSpot scoring to prioritize hot leads
3. **Automation** - Set up workflows to nurture automatically
4. **Follow-up** - Have a sequence ready for each lead
5. **Tracking** - Monitor conversion rates to optimize CTA placement

---

## 🔗 Useful Links

- HubSpot Dashboard: https://app-eu1.hubspot.com
- Create Workflows: https://app-eu1.hubspot.com/workflows
- Contacts: https://app-eu1.hubspot.com/contacts/lists/0/views/all
- Settings: https://app-eu1.hubspot.com/settings/148698905

---

## ❓ Troubleshooting

### Leads not appearing in HubSpot?
1. Check `.env.local` has correct token
2. Verify token has correct permissions
3. Check server logs for errors
4. Test with browser dev tools network tab

### Form submissions failing?
1. Verify RESEND_API_KEY is set
2. Check email recipient is correct
3. Review server error logs

### Phone links not working?
1. Test on mobile device
2. Verify phone number format: `tel:+1234567890`
3. WhatsApp format: `https://wa.me/1234567890`

---

**You're all set! Start capturing leads like a pro! 🚀**
