/* eslint-disable quotes */
import type { LocalizationResource } from "@clerk/types";

export const uzUZ: LocalizationResource = {
  locale: "uz-UZ",
  apiKeys: {
    action__add: "Yangi kalit qo‘shish",
    action__search: "Kalitlarni qidirish",
    createdAndExpirationStatus__expiresOn:
      "Yaratilgan {{ createdDate | shortDate('uz-UZ') }} • Amal qilish muddati tugaydi {{ expiresDate | longDate('uz-UZ') }}",
    createdAndExpirationStatus__never:
      "Yaratilgan {{ createdDate | shortDate('uz-UZ') }} • Muddatsiz amal qiladi",
    detailsTitle__emptyRow: "API kalitlari topilmadi",
    formButtonPrimary__add: "Kalit yaratish",
    formFieldCaption__expiration__expiresOn: "{{ date }} da muddati tugaydi",
    formFieldCaption__expiration__never: "Bu kalit muddatsiz amal qiladi",
    formFieldOption__expiration__180d: "180 kun",
    formFieldOption__expiration__1d: "1 kun",
    formFieldOption__expiration__1y: "1 yil",
    formFieldOption__expiration__30d: "30 kun",
    formFieldOption__expiration__60d: "60 kun",
    formFieldOption__expiration__7d: "7 kun",
    formFieldOption__expiration__90d: "90 kun",
    formFieldOption__expiration__never: "Muddatsiz",
    formHint:
      "Yangi kalit yaratish uchun nom kiriting. Siz uni istalgan vaqtda bekor qilishingiz mumkin.",
    formTitle: "Yangi API kalit qo‘shish",
    lastUsed__days: "{{days}} kun oldin",
    lastUsed__hours: "{{hours}} soat oldin",
    lastUsed__minutes: "{{minutes}} daqiqa oldin",
    lastUsed__months: "{{months}} oy oldin",
    lastUsed__seconds: "{{seconds}} soniya oldin",
    lastUsed__years: "{{years}} yil oldin",
    menuAction__revoke: "Kalitni bekor qilish",
    revokeConfirmation: {
      confirmationText: "Bekor qilish",
      formButtonPrimary__revoke: "Kalitni bekor qilish",
      formHint: "Haqiqatan ham ushbu maxfiy kalitni o‘chirmoqchimisiz?",
      formTitle: '"{{apiKeyName}}" maxfiy kalitini bekor qilasizmi?',
    },
  },
  backButton: "Orqaga",
  badge__activePlan: "Faol",
  badge__canceledEndsAt:
    "Bekor qilingan • Tugash sanasi {{ date | shortDate('uz-UZ') }}",
  badge__currentPlan: "Joriy reja",
  badge__default: "Standart",
  badge__endsAt: "Tugash sanasi {{ date | shortDate('uz-UZ') }}",
  badge__expired: "Muddati tugagan",
  badge__otherImpersonatorDevice: "Boshqa taqlidchi qurilma",
  badge__pastDueAt: "To‘lov muddati o‘tgan {{ date | shortDate('uz-UZ') }}",
  badge__pastDuePlan: "To‘lov muddati o‘tgan reja",
  badge__primary: "Asosiy",
  badge__renewsAt: "Yangilanadi {{ date | shortDate('uz-UZ') }}",
  badge__requiresAction: "Harakat talab qilinadi",
  badge__startsAt: "Boshlanish sanasi {{ date | shortDate('uz-UZ') }}",
  badge__thisDevice: "Ushbu qurilma",
  // badge__trialEndsAt: "Sinov muddati tugaydi {{ date | shortDate('uz-UZ') }}",
  badge__unverified: "Tasdiqlanmagan",
  badge__upcomingPlan: "Kelgusi reja",
  badge__userDevice: "Foydalanuvchi qurilmasi",
  badge__you: "Siz",

  commerce: {
    addPaymentMethod: "To‘lov usulini qo‘shish",
    alwaysFree: "Har doim bepul",
    annually: "Yiliga bir marta",
    availableFeatures: "Mavjud imkoniyatlar",
    billedAnnually: "Yiliga bir marta to‘lov qilinadi",
    billedMonthlyOnly: "Faqat oylik to‘lov",
    cancelSubscription: "Obunani bekor qilish",
    cancelSubscriptionAccessUntil:
      "'{{plan}}' funksiyalaridan {{ date | longDate('uz-UZ') }} gacha foydalanishingiz mumkin, shundan so‘ng ularga kirish imkoningiz bo‘lmaydi.",
    cancelSubscriptionNoCharge: "Ushbu obuna uchun sizdan to‘lov olinmaydi.",
    cancelSubscriptionTitle: "{{plan}} obunasini bekor qilasizmi?",
    cannotSubscribeMonthly:
      "Ushbu rejaga oylik to‘lov bilan obuna bo‘lolmaysiz. Ushbu rejaga obuna bo‘lish uchun yillik to‘lovni tanlashingiz kerak.",
    cannotSubscribeUnrecoverable:
      "Ushbu rejaga obuna bo‘lolmaysiz. Sizning joriy obunangiz ushbu rejadan qimmatroq.",
    checkout: {
      description__paymentSuccessful:
        "To‘lovingiz muvaffaqiyatli amalga oshirildi.",
      description__subscriptionSuccessful: "Yangi obunangiz tayyor.",
      downgradeNotice:
        "Joriy obunangiz va uning funksiyalari hisob-kitob davri oxirigacha saqlanadi, so‘ng ushbu obunaga o‘tiladi.",
      emailForm: {
        subtitle:
          "Xaridni yakunlashdan oldin chek yuboriladigan elektron pochta manzilini qo‘shishingiz kerak.",
        title: "Elektron pochta manzilini qo‘shish",
      },
      lineItems: {
        title__paymentMethod: "To‘lov usuli",
        title__statementId: "Chek ID",
        title__subscriptionBegins: "Obuna boshlanish sanasi",
        title__totalPaid: "Jami to‘langan",
      },
      pastDueNotice: "Oldingi obunangizning to‘lovi amalga oshirilmagan.",
      perMonth: "oyiga",
      title: "To‘lov",
      title__paymentSuccessful: "To‘lov muvaffaqiyatli!",
      title__subscriptionSuccessful: "Muvaffaqiyat!",
    },
    credit: "Kredit",
    creditRemainder: "Joriy obunangizning qolgan davri uchun kredit.",
    defaultFreePlanActive: "Siz hozirda bepul rejadasiz",
    free: "Bepul",
    getStarted: "Boshlash",
    keepSubscription: "Obunani saqlab qolish",
    manage: "Boshqarish",
    manageSubscription: "Obunani boshqarish",
    month: "Oy",
    monthly: "Oylik",
    pastDue: "To‘lov muddati o‘tgan",
    pay: "{{amount}} to‘lash",
    paymentMethods: "To‘lov usullari",
    paymentSource: {
      applePayDescription: {
        annual: "Yillik to‘lov",
        monthly: "Oylik to‘lov",
      },
      dev: {
        anyNumbers: "Istalgan raqamlar",
        cardNumber: "Karta raqami",
        cvcZip: "CVC, ZIP",
        developmentMode: "Dasturlash rejimi",
        expirationDate: "Amal qilish muddati",
        testCardInfo: "Test karta ma’lumotlari",
      },
    },
    popular: "Ommabop",
    pricingTable: {
      billingCycle: "To‘lov davri",
      included: "Kiritilgan",
    },
    reSubscribe: "Qayta obuna bo‘lish",
    seeAllFeatures: "Barcha imkoniyatlarni ko‘rish",
    // startFreeTrial: "{{days}} kunlik bepul sinovni boshlash",
    subscribe: "Obuna bo‘lish",
    subscriptionDetails: {
      beginsOn: "Boshlanish sanasi",
      currentBillingCycle: "Joriy to‘lov davri",
      endsOn: "Tugash sanasi",
      nextPaymentAmount: "Keyingi to‘lov miqdori",
      nextPaymentOn: "Keyingi to‘lov sanasi",
      pastDueAt: "To‘lov muddati o‘tgan sana",
      renewsAt: "Yangilanish sanasi",
      subscribedOn: "Obuna qilingan sana",
      title: "Obuna",
    },
    subtotal: "Oraliq summa",
    switchPlan: "Ushbu rejaga o‘tish",
    switchToAnnual: "Yillik rejaga o‘tish",
    switchToAnnualWithAnnualPrice:
      "Yillik rejaga o‘tish {{currency}}{{price}} / yil",
    switchToMonthly: "Oylik rejaga o‘tish",
    switchToMonthlyWithPrice: "Oylik rejaga o‘tish {{currency}}{{price}} / oy",
    totalDue: "Jami qarz",
    totalDueToday: "Bugun to‘lanadigan jami summa",
    viewFeatures: "Imkoniyatlarni ko‘rish",
    viewPayment: "To‘lovni ko‘rish",
    year: "Yil",
  },

  createOrganization: {
    formButtonSubmit: "Tashkilot yaratish",
    invitePage: {
      formButtonReset: "O‘tkazib yuborish",
    },
    title: "Tashkilot yaratish",
  },
  dates: {
    lastDay: "Kecha soat {{ date | timeString('uz-UZ') }}",
    next6Days:
      "{{ date | weekday('uz-UZ','long') }} kuni soat {{ date | timeString('uz-UZ') }}",
    nextDay: "Ertaga soat {{ date | timeString('uz-UZ') }}",
    numeric: "{{ date | numeric('uz-UZ') }}",
    previous6Days:
      "O‘tgan {{ date | weekday('uz-UZ','long') }} kuni soat {{ date | timeString('uz-UZ') }}",
    sameDay: "Bugun soat {{ date | timeString('uz-UZ') }}",
  },

  dividerText: "yoki",
  footerActionLink__alternativePhoneCodeProvider: "Kod SMS orqali yuborilsin",
  footerActionLink__useAnotherMethod: "Boshqa usuldan foydalanish",
  footerPageLink__help: "Yordam",
  footerPageLink__privacy: "Maxfiylik",
  footerPageLink__terms: "Shartlar",
  formButtonPrimary: "Davom etish",
  formButtonPrimary__verify: "Tasdiqlash",
  formFieldAction__forgotPassword: "Parolni unutdingizmi?",
  formFieldError__matchingPasswords: "Parollar mos.",
  formFieldError__notMatchingPasswords: "Parollar mos emas.",
  formFieldError__verificationLinkExpired:
    "Tasdiqlash havolasining muddati tugagan. Yangi havola so‘rang.",
  formFieldHintText__optional: "Ixtiyoriy",
  formFieldHintText__slug:
    "Slug — bu inson o‘qiy oladigan va noyob bo‘lishi kerak bo‘lgan ID. Odatda URL-larda ishlatiladi.",
  formFieldInputPlaceholder__apiKeyDescription:
    "Ushbu kalitni nima uchun yaratayotganingizni tushuntiring",
  formFieldInputPlaceholder__apiKeyExpirationDate: "Sanani tanlang",
  formFieldInputPlaceholder__apiKeyName: "Maxfiy kalit nomini kiriting",
  formFieldInputPlaceholder__backupCode: "Zaxira kodini kiriting",
  formFieldInputPlaceholder__confirmDeletionUserAccount: "Hisobni o‘chirish",
  formFieldInputPlaceholder__emailAddress:
    "Elektron pochta manzilingizni kiriting",
  formFieldInputPlaceholder__emailAddress_username:
    "Email yoki foydalanuvchi nomini kiriting",
  formFieldInputPlaceholder__emailAddresses:
    "example@email.com, example2@email.com",
  formFieldInputPlaceholder__firstName: "Ismingiz",
  formFieldInputPlaceholder__lastName: "Familiyangiz",
  formFieldInputPlaceholder__organizationDomain: "example.com",
  formFieldInputPlaceholder__organizationDomainEmailAddress: "you@example.com",
  formFieldInputPlaceholder__organizationName: "Tashkilot nomi",
  formFieldInputPlaceholder__organizationSlug: "my-org",
  formFieldInputPlaceholder__password: "Parolingizni kiriting",
  formFieldInputPlaceholder__phoneNumber: "Telefon raqamingizni kiriting",
  formFieldInputPlaceholder__username: undefined,
  formFieldLabel__apiKeyDescription: "Tavsif",
  formFieldLabel__apiKeyExpiration: "Muddati tugash sanasi",
  formFieldLabel__apiKeyName: "Maxfiy kalit nomi",
  formFieldLabel__automaticInvitations:
    "Ushbu domen uchun avtomatik takliflarni yoqish",
  formFieldLabel__backupCode: "Zaxira kodi",
  formFieldLabel__confirmDeletion: "Tasdiqlash",
  formFieldLabel__confirmPassword: "Parolni tasdiqlash",
  formFieldLabel__currentPassword: "Joriy parol",
  formFieldLabel__emailAddress: "Elektron pochta manzili",
  formFieldLabel__emailAddress_username: "Email yoki foydalanuvchi nomi",
  formFieldLabel__emailAddresses: "Elektron pochta manzillari",
  formFieldLabel__firstName: "Ism",
  formFieldLabel__lastName: "Familiya",
  formFieldLabel__newPassword: "Yangi parol",
  formFieldLabel__organizationDomain: "Domen",
  formFieldLabel__organizationDomainDeletePending:
    "Kutilayotgan takliflar va tavsiyalarni o‘chirish",
  formFieldLabel__organizationDomainEmailAddress:
    "Tasdiqlash uchun email manzil",
  formFieldLabel__organizationDomainEmailAddressDescription:
    "Ushbu domen ostidagi email manzilni kiriting, kod yuboriladi va domen tasdiqlanadi.",
  formFieldLabel__organizationName: "Nomi",
  formFieldLabel__organizationSlug: "Slug",
  formFieldLabel__passkeyName: "Passkey nomi",
  formFieldLabel__password: "Parol",
  formFieldLabel__phoneNumber: "Telefon raqami",
  formFieldLabel__role: "Rol",
  formFieldLabel__signOutOfOtherSessions: "Boshqa barcha qurilmalardan chiqish",
  formFieldLabel__username: "Foydalanuvchi nomi",

  impersonationFab: {
    action__signOut: "Chiqish",
    title: "{{identifier}} sifatida tizimga kirilgan",
  },
  maintenanceMode:
    "Hozir texnik xizmat ko‘rsatish ishlari olib borilmoqda, lekin xavotir olmang, bu bir necha daqiqadan ortiq vaqt olmaydi.",
  membershipRole__admin: "Admin",
  membershipRole__basicMember: "A’zo",
  membershipRole__guestMember: "Mehmon",
  organizationList: {
    action__createOrganization: "Tashkilot yaratish",
    action__invitationAccept: "Qo‘shilish",
    action__suggestionsAccept: "Qo‘shilish so‘rovini yuborish",
    createOrganization: "Tashkilot yaratish",
    invitationAcceptedLabel: "Qo‘shildi",
    subtitle:
      "{{applicationName}} xizmatidan foydalanishni davom ettirish uchun",
    suggestionsAcceptedLabel: "Tasdiqlash kutilmoqda",
    title: "Hisobni tanlang",
    titleWithoutPersonal: "Tashkilotni tanlang",
  },

  organizationProfile: {
    apiKeysPage: {
      title: "API kalitlar",
    },
    badge__automaticInvitation: "Avtomatik takliflar",
    badge__automaticSuggestion: "Avtomatik taklif etish",
    badge__manualInvitation: "Avtomatik qo‘shilish yo‘q",
    badge__unverified: "Tasdiqlanmagan",
    billingPage: {
      paymentHistorySection: {
        empty: "To‘lov tarixi yo‘q",
        notFound: "To‘lov urinish topilmadi",
        tableHeader__amount: "Miqdor",
        tableHeader__date: "Sana",
        tableHeader__status: "Holat",
      },
      paymentSourcesSection: {
        actionLabel__default: "Standart qil",
        actionLabel__remove: "O‘chirish",
        add: "Yangi to‘lov usulini qo‘shish",
        addSubtitle: "Hisobingizga yangi to‘lov usulini qo‘shing.",
        cancelButton: "Bekor qilish",
        formButtonPrimary__add: "To‘lov usulini qo‘shish",
        formButtonPrimary__pay: "{{amount}} to‘lash",
        payWithTestCardButton: "Test kartasi bilan to‘lash",
        removeResource: {
          messageLine1: "{{identifier}} ushbu hisobdan o‘chiriladi.",
          messageLine2:
            "Bu to‘lov manbasi ishlamaydi va unga bog‘liq obunalar ham ishlashdan to‘xtaydi.",
          successMessage: "{{paymentSource}} hisobingizdan o‘chirildi.",
          title: "To‘lov usulini o‘chirish",
        },
        title: "To‘lov usullari",
      },
      start: {
        headerTitle__payments: "To‘lovlar",
        headerTitle__plans: "Tariflar",
        headerTitle__statements: "Hisobotlar",
        headerTitle__subscriptions: "Obuna",
      },
      statementsSection: {
        empty: "Ko‘rsatish uchun hisobot yo‘q",
        itemCaption__paidForPlan: "{{plan}} {{period}} tarifiga to‘landi",
        itemCaption__proratedCredit:
          "Avvalgi obunadan foydalanilgan qismi uchun proporsional kredit",
        itemCaption__subscribedAndPaidForPlan:
          "{{plan}} {{period}} tarifiga obuna bo‘lib to‘landi",
        notFound: "Hisobot topilmadi",
        tableHeader__amount: "Miqdor",
        tableHeader__date: "Sana",
        title: "Hisobotlar",
        totalPaid: "Jami to‘langan",
      },
      subscriptionsListSection: {
        actionLabel__newSubscription: "Tarifga obuna bo‘lish",
        actionLabel__switchPlan: "Tarifni almashtirish",
        tableHeader__edit: "Tahrirlash",
        tableHeader__plan: "Tarif",
        tableHeader__startDate: "Boshlanish sanasi",
        title: "Obuna",
      },
      subscriptionsSection: {
        actionLabel__default: "Boshqarish",
      },
      switchPlansSection: {
        title: "Tariflarni almashtirish",
      },
      title: "Hisob-kitob",
    },
    createDomainPage: {
      subtitle:
        "Domenni tasdiqlash uchun qo‘shing. Ushbu domen emailiga ega foydalanuvchilar tashkilotga avtomatik yoki so‘rov orqali qo‘shilishi mumkin.",
      title: "Domen qo‘shish",
    },
    invitePage: {
      detailsTitle__inviteFailed:
        "Takliflar yuborilmadi. Quyidagi email manzillari uchun allaqachon kutilayotgan takliflar mavjud: {{email_addresses}}.",
      formButtonPrimary__continue: "Takliflarni yuborish",
      selectDropdown__role: "Rolni tanlang",
      subtitle:
        "Bir yoki bir nechta email manzil kiriting yoki joylashtiring, bo‘sh joy yoki vergul bilan ajrating.",
      successMessage: "Takliflar muvaffaqiyatli yuborildi",
      title: "Yangi a’zolarni taklif qilish",
    },
    membersPage: {
      action__invite: "Taklif qilish",
      action__search: "Qidirish",
      activeMembersTab: {
        menuAction__remove: "A’zoni o‘chirish",
        tableHeader__actions: "Amallar",
        tableHeader__joined: "Qo‘shilgan",
        tableHeader__role: "Rol",
        tableHeader__user: "Foydalanuvchi",
      },
      detailsTitle__emptyRow: "Ko‘rsatish uchun a’zo yo‘q",
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            "Tashkilotingizga email domen ulash orqali foydalanuvchilarni taklif qiling. Ushbu domen emailiga ega bo‘lganlar istalgan vaqtda qo‘shila oladi.",
          headerTitle: "Avtomatik takliflar",
          primaryButton: "Tasdiqlangan domenlarni boshqarish",
        },
        table__emptyRow: "Takliflar yo‘q",
      },
      invitedMembersTab: {
        menuAction__revoke: "Taklifni bekor qilish",
        tableHeader__invited: "Taklif qilingan",
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            "Ushbu domen emaili bilan ro‘yxatdan o‘tganlar tashkilotga qo‘shilishga so‘rov yuborish tavsiyasini oladi.",
          headerTitle: "Avtomatik tavsiyalar",
          primaryButton: "Tasdiqlangan domenlarni boshqarish",
        },
        menuAction__approve: "Tasdiqlash",
        menuAction__reject: "Rad etish",
        tableHeader__requested: "Kirish so‘rovi",
        table__emptyRow: "So‘rovlar yo‘q",
      },
      start: {
        headerTitle__invitations: "Takliflar",
        headerTitle__members: "A’zolar",
        headerTitle__requests: "So‘rovlar",
      },
    },
    navbar: {
      apiKeys: "API kalitlar",
      billing: "Hisob-kitob",
      description: "Tashkilotingizni boshqaring.",
      general: "Umumiy",
      members: "A’zolar",
      title: "Tashkilot",
    },
    plansPage: {
      alerts: {
        noPermissionsToManageBilling:
          "Sizda ushbu tashkilot uchun hisob-kitobni boshqarish huquqi yo‘q.",
      },
      title: "Tariflar",
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription:
            'Davom etish uchun "{{organizationName}}" deb yozing.',
          messageLine1: "Haqiqatan ham ushbu tashkilotni o‘chirmoqchimisiz?",
          messageLine2: "Bu amal qaytarilmaydi.",
          successMessage: "Tashkilot o‘chirildi.",
          title: "Tashkilotni o‘chirish",
        },
        leaveOrganization: {
          actionDescription:
            'Davom etish uchun "{{organizationName}}" deb yozing.',
          messageLine1:
            "Haqiqatan ham ushbu tashkilotni tark etmoqchimisiz? Siz barcha kirish huquqlarini yo‘qotasiz.",
          messageLine2: "Bu amal qaytarilmaydi.",
          successMessage: "Tashkilotni tark etdingiz.",
          title: "Tashkilotni tark etish",
        },
        title: "Xavfli amallar",
      },
      domainSection: {
        menuAction__manage: "Boshqarish",
        menuAction__remove: "O‘chirish",
        menuAction__verify: "Tasdiqlash",
        primaryButton: "Domen qo‘shish",
        subtitle:
          "Tasdiqlangan domen asosida foydalanuvchilarni avtomatik yoki so‘rov orqali qo‘shishga ruxsat bering.",
        title: "Tasdiqlangan domenlar",
      },
      successMessage: "Tashkilot yangilandi.",
      title: "Profilni yangilash",
    },
    removeDomainPage: {
      messageLine1: "{{domain}} email domeni o‘chirildi.",
      messageLine2:
        "Shundan keyin foydalanuvchilar avtomatik qo‘shila olmaydi.",
      successMessage: "{{domain}} o‘chirildi.",
      title: "Domenni o‘chirish",
    },
    start: {
      headerTitle__general: "Umumiy",
      headerTitle__members: "A’zolar",
      profileSection: {
        primaryButton: "Profilni yangilash",
        title: "Tashkilot profili",
        uploadAction__title: "Logo",
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel:
          "Bu domenni o‘chirish taklif qilingan foydalanuvchilarga ta’sir qiladi.",
        removeDomainActionLabel__remove: "Domenni o‘chirish",
        removeDomainSubtitle:
          "Bu domenni tasdiqlangan domenlardan olib tashlash",
        removeDomainTitle: "Domenni o‘chirish",
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          "Foydalanuvchilar ro‘yxatdan o‘tganda avtomatik taklif qilinadi va istalgan vaqtda qo‘shila oladi.",
        automaticInvitationOption__label: "Avtomatik takliflar",
        automaticSuggestionOption__description:
          "Foydalanuvchilar qo‘shilish uchun so‘rov yuborish tavsiyasini oladi, lekin admin tasdiqlamaguncha qo‘shila olmaydi.",
        automaticSuggestionOption__label: "Avtomatik tavsiyalar",
        calloutInfoLabel:
          "Ro‘yxatga olish rejimini o‘zgartirish faqat yangi foydalanuvchilarga ta’sir qiladi.",
        calloutInvitationCountLabel:
          "Foydalanuvchilarga yuborilgan takliflar: {{count}}",
        calloutSuggestionCountLabel:
          "Foydalanuvchilarga yuborilgan tavsiyalar: {{count}}",
        manualInvitationOption__description:
          "Foydalanuvchilar faqat qo‘lda taklif qilinadi.",
        manualInvitationOption__label: "Avtomatik qo‘shilish yo‘q",
        subtitle:
          "Ushbu domendagi foydalanuvchilar tashkilotga qanday qo‘shilishini tanlang.",
      },
      start: {
        headerTitle__danger: "Xavfli amallar",
        headerTitle__enrollment: "Qo‘shilish usullari",
      },
      subtitle:
        "{{domain}} domeni tasdiqlandi. Endi qo‘shilish rejimini tanlang.",
      title: "{{domain}} ni yangilash",
    },
    verifyDomainPage: {
      formSubtitle: "Emailingizga yuborilgan tasdiqlash kodini kiriting",
      formTitle: "Tasdiqlash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "{{domainName}} domeni email orqali tasdiqlanishi kerak.",
      subtitleVerificationCodeScreen:
        "Tasdiqlash kodi {{emailAddress}} manziliga yuborildi. Davom etish uchun kiriting.",
      title: "Domenni tasdiqlash",
    },
  },
  organizationSwitcher: {
    action__createOrganization: "Tashkilot yaratish",
    action__invitationAccept: "Qo‘shilish",
    action__manageOrganization: "Boshqarish",
    action__suggestionsAccept: "Qo‘shilish so‘rovi yuborish",
    notSelected: "Tashkilot tanlanmagan",
    personalWorkspace: "Shaxsiy hisob",
    suggestionsAcceptedLabel: "Tasdiqlash kutilmoqda",
  },
  paginationButton__next: "Keyingi",
  paginationButton__previous: "Oldingi",
  paginationRowText__displaying: "Ko‘rsatilmoqda",
  paginationRowText__of: "dan",

  reverification: {
    alternativeMethods: {
      actionLink: "Yordam olish",
      actionText: "Bularning hech biri yo‘qmi?",
      blockButton__backupCode: "Zaxira koddan foydalanish",
      blockButton__emailCode:
        "Kodni {{identifier}} elektron pochtasiga yuborish",
      blockButton__passkey: "Passkey orqali kirish",
      blockButton__password: "Parol bilan davom ettirish",
      blockButton__phoneCode: "SMS kodni {{identifier}} raqamiga yuborish",
      blockButton__totp: "Autentifikator ilovadan foydalanish",
      getHelp: {
        blockButton__emailSupport: "Yordam xizmatiga email yuborish",
        content:
          "Akkountingizni tasdiqlashda muammo bo‘lsa, bizga email yozing va imkon qadar tezroq kirish imkoniyatini tiklashda yordam beramiz.",
        title: "Yordam olish",
      },
      subtitle:
        "Muammo bo‘lyaptimi? Tasdiqlash uchun quyidagi usullardan foydalanishingiz mumkin.",
      title: "Boshqa usuldan foydalanish",
    },
    backupCodeMfa: {
      subtitle:
        "Ikki bosqichli autentifikatsiyani sozlaganingizda berilgan zaxira kodni kiriting",
      title: "Zaxira kodni kiriting",
    },
    emailCode: {
      formTitle: "Tasdiqlash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "Davom etish uchun emailingizga yuborilgan kodni kiriting",
      title: "Tasdiqlash talab qilinadi",
    },
    noAvailableMethods: {
      message:
        "Tasdiqlashni davom ettirib bo‘lmaydi. Mos autentifikatsiya usuli mavjud emas",
      subtitle: "Xatolik yuz berdi",
      title: "Akkountingizni tasdiqlab bo‘lmaydi",
    },
    passkey: {
      blockButton__passkey: "Passkey orqali kirish",
      subtitle:
        "Passkey-dan foydalanish shaxsingizni tasdiqlaydi. Qurilmangiz barmoq izi, yuz yoki ekran qulfini so‘rashi mumkin.",
      title: "Passkey orqali kirish",
    },
    password: {
      actionLink: "Boshqa usuldan foydalanish",
      subtitle: "Davom etish uchun joriy parolingizni kiriting",
      title: "Tasdiqlash talab qilinadi",
    },
    phoneCode: {
      formTitle: "Tasdiqlash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "Davom etish uchun telefoningizga yuborilgan kodni kiriting",
      title: "Tasdiqlash talab qilinadi",
    },
    phoneCodeMfa: {
      formTitle: "Tasdiqlash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "Davom etish uchun telefoningizga yuborilgan kodni kiriting",
      title: "Tasdiqlash talab qilinadi",
    },
    totpMfa: {
      formTitle: "Tasdiqlash kodi",
      subtitle:
        "Davom etish uchun autentifikator ilovangiz tomonidan yaratilgan kodni kiriting",
      title: "Tasdiqlash talab qilinadi",
    },
  },

  signIn: {
    accountSwitcher: {
      action__addAccount: "Akkount qo‘shish",
      action__signOutAll: "Barcha akkountlardan chiqish",
      subtitle: "Davom ettirmoqchi bo‘lgan akkountingizni tanlang.",
      title: "Akkountni tanlang",
    },
    alternativeMethods: {
      actionLink: "Yordam olish",
      actionText: "Bularning hech biri yo‘qmi?",
      blockButton__backupCode: "Zaxira koddan foydalanish",
      blockButton__emailCode:
        "Kodni {{identifier}} elektron pochtasiga yuborish",
      blockButton__emailLink:
        "Havolani {{identifier}} elektron pochtasiga yuborish",
      blockButton__passkey: "Passkey bilan kirish",
      blockButton__password: "Parol bilan kirish",
      blockButton__phoneCode: "SMS kodni {{identifier}} raqamiga yuborish",
      blockButton__totp: "Autentifikator ilovadan foydalanish",
      getHelp: {
        blockButton__emailSupport: "Yordam xizmatiga email yuborish",
        content:
          "Akkountingizga kirishda muammo bo‘lsa, bizga email yozing va imkon qadar tezroq kirish imkoniyatini tiklashda yordam beramiz.",
        title: "Yordam olish",
      },
      subtitle:
        "Muammo bo‘lyaptimi? Kirish uchun quyidagi usullardan foydalanishingiz mumkin.",
      title: "Boshqa usuldan foydalanish",
    },

    alternativePhoneCodeProvider: {
      formTitle: "Tasdiqlash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "{{applicationName}} ilovasiga davom etish uchun",
      title: "{{provider}} orqali xabarni tekshiring",
    },
    backupCodeMfa: {
      subtitle:
        "Zaxira kod — bu ikki bosqichli autentifikatsiyani sozlaganingizda olgan kodingiz.",
      title: "Zaxira kodni kiriting",
    },
    emailCode: {
      formTitle: "Tasdiqlash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "{{applicationName}} ilovasiga davom etish uchun",
      title: "Emailingizni tekshiring",
    },
    emailLink: {
      clientMismatch: {
        subtitle:
          "Davom etish uchun, tasdiqlash havolasini kirishni boshlagan qurilma va brauzerda oching.",
        title: "Tasdiqlash havolasi ushbu qurilmaga mos emas",
      },
      expired: {
        subtitle: "Davom etish uchun asl tabga qayting.",
        title: "Tasdiqlash havolasi muddati tugagan",
      },
      failed: {
        subtitle: "Davom etish uchun asl tabga qayting.",
        title: "Tasdiqlash havolasi noto‘g‘ri",
      },
      formSubtitle:
        "Emailingizga yuborilgan tasdiqlash havolasidan foydalaning",
      formTitle: "Tasdiqlash havolasi",
      loading: {
        subtitle: "Tez orada yo‘naltirilasiz",
        title: "Kirish jarayonida...",
      },
      resendButton: "Havola kelmadimi? Qayta yuborish",
      subtitle: "{{applicationName}} ilovasiga davom etish uchun",
      title: "Emailingizni tekshiring",
      unusedTab: {
        title: "Ushbu tabni yopishingiz mumkin",
      },
      verified: {
        subtitle: "Tez orada yo‘naltirilasiz",
        title: "Muvaffaqiyatli kirildi",
      },
      verifiedSwitchTab: {
        subtitle: "Davom etish uchun asl tabga qayting",
        subtitleNewTab: "Davom etish uchun yangi ochilgan tabga qayting",
        titleNewTab: "Boshqa tab orqali kirildi",
      },
    },
    forgotPassword: {
      formTitle: "Parolni tiklash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "Parolingizni tiklash uchun",
      subtitle_email: "Avval, emailingizga yuborilgan kodni kiriting",
      subtitle_phone: "Avval, telefoningizga yuborilgan kodni kiriting",
      title: "Parolni tiklash",
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: "Parolni tiklash",
      label__alternativeMethods: "Yoki boshqa usul bilan tizimga kiring",
      title: "Parolingiz esdan chiqdimi?",
    },
    noAvailableMethods: {
      message:
        "Tizimga kirib bo‘lmaydi. Autentifikatsiya uchun mavjud usul topilmadi.",
      subtitle: "Xatolik yuz berdi",
      title: "Kirish imkoni yo‘q",
    },

    passkey: {
      subtitle:
        "Passkey yordamida kirish siz ekanligingizni tasdiqlaydi. Qurilmangiz sizdan barmoq izi, yuz tasdiqlash yoki ekran qulfiga ruxsat so‘rashi mumkin.",
      title: "Passkey yordamida kiring",
    },
    password: {
      actionLink: "Boshqa usuldan foydalanish",
      subtitle: "Hisobingiz bilan bog‘langan parolni kiriting",
      title: "Parolingizni kiriting",
    },
    passwordPwned: {
      title: "Parol buzilgan",
    },
    phoneCode: {
      formTitle: "Tasdiqlash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "{{applicationName}} ga davom etish uchun",
      title: "Telefoningizni tekshiring",
    },
    phoneCodeMfa: {
      formTitle: "Tasdiqlash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle:
        "Davom etish uchun, telefoningizga yuborilgan tasdiqlash kodini kiriting",
      title: "Telefoningizni tekshiring",
    },

    resetPassword: {
      formButtonPrimary: "Parolni tiklash",
      requiredMessage:
        "Xavfsizlik sababli, parolingizni tiklashingiz talab qilinadi.",
      successMessage:
        "Parolingiz muvaffaqiyatli o‘zgartirildi. Tizimga kiritilmoqdasiz, iltimos kuting.",
      title: "Yangi parol o‘rnating",
    },
    resetPasswordMfa: {
      detailsLabel:
        "Parolingizni tiklashdan oldin shaxsingizni tasdiqlashimiz kerak.",
    },
    start: {
      actionLink: "Ro‘yxatdan o‘tish",
      actionLink__join_waitlist: "Kutish ro‘yxatiga qo‘shilish",
      actionLink__use_email: "Emaildan foydalanish",
      actionLink__use_email_username:
        "Email yoki foydalanuvchi nomidan foydalanish",
      actionLink__use_passkey: "Passkey orqali kirish",
      actionLink__use_phone: "Telefon raqamidan foydalanish",
      actionLink__use_username: "Foydalanuvchi nomidan foydalanish",
      actionText: "Hisobingiz yo‘qmi?",
      actionText__join_waitlist: "Erta kirish imkonini xohlaysizmi?",
      alternativePhoneCodeProvider: {
        actionLink: "Boshqa usuldan foydalanish",
        label: "{{provider}} telefon raqami",
        subtitle:
          "Telefon raqamingizni kiriting va {{provider}} orqali tasdiqlash kodini oling.",
        title: "{{provider}} orqali {{applicationName}} tizimiga kiring",
      },
      subtitle: "Yana xush kelibsiz! Davom etish uchun tizimga kiring",
      subtitleCombined: undefined,
      title: "{{applicationName}} tizimiga kiring",
      titleCombined: "{{applicationName}} ga davom eting",
    },
    totpMfa: {
      formTitle: "Tasdiqlash kodi",
      subtitle:
        "Davom etish uchun, autentifikatsiya ilovangiz yaratgan tasdiqlash kodini kiriting",
      title: "Ikki bosqichli tasdiqlash",
    },
  },
  signInEnterPasswordTitle: "Parolingizni kiriting",
  signUp: {
    alternativePhoneCodeProvider: {
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "{{provider}} orqali yuborilgan tasdiqlash kodini kiriting",
      title: "{{provider}} ni tasdiqlang",
    },
    continue: {
      actionLink: "Tizimga kirish",
      actionText: "Allaqachon hisobingiz bormi?",
      subtitle: "Davom etish uchun qolgan ma'lumotlarni to‘ldiring.",
      title: "Yetishmayotgan maydonlarni to‘ldiring",
    },
    emailCode: {
      formSubtitle: "Email manzilingizga yuborilgan tasdiqlash kodini kiriting",
      formTitle: "Tasdiqlash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "Email manzilingizga yuborilgan tasdiqlash kodini kiriting",
      title: "Emailingizni tasdiqlang",
    },
    emailLink: {
      clientMismatch: {
        subtitle:
          "Davom etish uchun ro‘yxatdan o‘tishni boshlagan qurilma va brauzerdan tasdiqlash havolasini oching",
        title: "Tasdiqlash havolasi ushbu qurilma uchun yaroqsiz",
      },
      formSubtitle:
        "Email manzilingizga yuborilgan tasdiqlash havolasidan foydalaning",
      formTitle: "Tasdiqlash havolasi",
      loading: {
        title: "Ro‘yxatdan o‘tilmoqda...",
      },
      resendButton: "Havola kelmadimi? Qayta yuborish",
      subtitle: "{{applicationName}} ga davom etish uchun",
      title: "Emailingizni tasdiqlang",
      verified: {
        title: "Muvaffaqiyatli ro‘yxatdan o‘tildi",
      },
      verifiedSwitchTab: {
        subtitle: "Davom etish uchun yangi ochilgan oynaga qayting",
        subtitleNewTab: "Davom etish uchun oldingi oynaga qayting",
        title: "Email muvaffaqiyatli tasdiqlandi",
      },
    },
    legalConsent: {
      checkbox: {
        label__onlyPrivacyPolicy:
          'Men {{ privacyPolicyLink || link("Maxfiylik siyosati") }} bilan tanishdim va roziman',
        label__onlyTermsOfService:
          'Men {{ termsOfServiceLink || link("Xizmat ko‘rsatish shartlari") }} bilan tanishdim va roziman',
        label__termsOfServiceAndPrivacyPolicy:
          'Men {{ termsOfServiceLink || link("Xizmat ko‘rsatish shartlari") }} va {{ privacyPolicyLink || link("Maxfiylik siyosati") }} bilan tanishdim va roziman',
      },
      continue: {
        subtitle:
          "Davom etish uchun shartlar bilan tanishib, rozilik bildiring",
        title: "Yuridik rozilik",
      },
    },
    phoneCode: {
      formSubtitle:
        "Telefon raqamingizga yuborilgan tasdiqlash kodini kiriting",
      formTitle: "Tasdiqlash kodi",
      resendButton: "Kod kelmadimi? Qayta yuborish",
      subtitle: "Telefoningizga yuborilgan tasdiqlash kodini kiriting",
      title: "Telefoningizni tasdiqlang",
    },
    restrictedAccess: {
      actionLink: "Tizimga kirish",
      actionText: "Allaqachon hisobingiz bormi?",
      blockButton__emailSupport: "Yordamga email yozish",
      blockButton__joinWaitlist: "Kutish ro‘yxatiga qo‘shilish",
      subtitle:
        "Hozircha ro‘yxatdan o‘tish o‘chirilgan. Agar sizda kirish huquqi bo‘lishi kerak deb hisoblasangiz, yordamga murojaat qiling.",
      subtitleWaitlist:
        "Hozircha ro‘yxatdan o‘tish o‘chirilgan. Ishga tushganimizda birinchilardan bo‘lib bilish uchun kutish ro‘yxatiga qo‘shiling.",
      title: "Kirish cheklangan",
    },
    start: {
      actionLink: "Tizimga kirish",
      actionLink__use_email: "Buning o‘rniga emaildan foydalanish",
      actionLink__use_phone: "Buning o‘rniga telefondan foydalanish",
      actionText: "Allaqachon hisobingiz bormi?",
      alternativePhoneCodeProvider: {
        actionLink: "Boshqa usuldan foydalanish",
        label: "{{provider}} telefon raqami",
        subtitle:
          "Telefon raqamingizni kiriting va {{provider}} orqali tasdiqlash kodini oling.",
        title:
          "{{provider}} orqali {{applicationName}} tizimida ro‘yxatdan o‘ting",
      },
      subtitle: "Xush kelibsiz! Boshlash uchun ma'lumotlarni to‘ldiring.",
      subtitleCombined:
        "Xush kelibsiz! Boshlash uchun ma'lumotlarni to‘ldiring.",
      title: "Hisob yarating",
      titleCombined: "Hisob yarating",
    },
  },

  socialButtonsBlockButton: "{{provider|titleize}} orqali davom etish",
  socialButtonsBlockButtonManyInView: "{{provider|titleize}}",
  taskChooseOrganization: {
    chooseOrganization: {
      action__createOrganization: "Yangi tashkilot yaratish",
      action__invitationAccept: "Qo‘shilish",
      action__suggestionsAccept: "Qo‘shilishni so‘rash",
      subtitle: "Mavjud tashkilotga qo‘shiling yoki yangi tashkilot yarating",
      suggestionsAcceptedLabel: "Tasdiqlash kutilmoqda",
      title: "Tashkilotni tanlang",
    },
    createOrganization: {
      formButtonReset: "Bekor qilish",
      formButtonSubmit: "Yangi tashkilot yaratish",
      subtitle: "Tashkilotingiz haqida qisqacha ma'lumot bering",
      title: "Hisobingizni sozlash",
    },
    signOut: {
      actionLink: "Tizimdan chiqish",
      actionText: "{{identifier}} sifatida tizimga kirgansiz",
    },
  },

  unstable__errors: {
    already_a_member_in_organization: "{{email}} allaqachon tashkilot a'zosi.",
    captcha_invalid: undefined,
    captcha_unavailable:
      "Botni tekshirish muvaffaqiyatsiz bo‘lgani sababli ro‘yxatdan o‘tish amalga oshmadi. Iltimos, sahifani yangilang yoki yordam olish uchun qo‘llab-quvvatlash xizmatiga murojaat qiling.",
    form_code_incorrect: undefined,
    form_identifier_exists__email_address: undefined,
    form_identifier_exists__phone_number: undefined,
    form_identifier_exists__username: undefined,
    form_identifier_not_found: undefined,
    form_param_format_invalid: undefined,
    form_param_format_invalid__email_address: undefined,
    form_param_format_invalid__phone_number: undefined,
    form_param_max_length_exceeded__first_name: undefined,
    form_param_max_length_exceeded__last_name: undefined,
    form_param_max_length_exceeded__name: undefined,
    form_param_nil: undefined,
    form_param_type_invalid: undefined,
    form_param_type_invalid__email_address: undefined,
    form_param_type_invalid__phone_number: undefined,
    form_param_value_invalid: undefined,
    form_password_incorrect: undefined,
    form_password_length_too_short:
      "Parolingiz juda qisqa. U kamida 8 ta belgidan iborat bo‘lishi kerak.",
    form_password_not_strong_enough: "Parolingiz yetarlicha kuchli emas.",
    form_password_pwned:
      "Ushbu parol ma'lumotlar sizib chiqishida aniqlangan, boshqa parol tanlang.",
    form_password_pwned__sign_in:
      "Ushbu parol ma'lumotlar sizib chiqishida aniqlangan, iltimos, parolingizni qayta o‘rnating.",
    form_password_size_in_bytes_exceeded: undefined,
    form_password_validation_failed: undefined,
    form_username_invalid_character: undefined,
    form_username_invalid_length:
      "Foydalanuvchi nomi uzunligi {{min_length}} dan {{max_length}} belgigacha bo‘lishi kerak.",
    identification_deletion_failed: undefined,
    not_allowed_access: undefined,
    organization_domain_blocked: undefined,
    organization_domain_common: undefined,
    organization_domain_exists_for_enterprise_connection: undefined,
    organization_membership_quota_exceeded: undefined,
    organization_minimum_permissions_needed: undefined,
    passkey_already_exists:
      "Ushbu qurilmada allaqachon passkey ro‘yxatdan o‘tkazilgan.",
    passkey_not_supported: "Ushbu qurilmada passkey qo‘llab-quvvatlanmaydi.",
    passkey_pa_not_supported:
      "Ro‘yxatdan o‘tish uchun platforma autentifikatori talab qilinadi, lekin qurilmangiz uni qo‘llab-quvvatlamaydi.",
    passkey_registration_cancelled:
      "Passkey ro‘yxatdan o‘tkazish bekor qilindi yoki vaqti tugadi.",
    passkey_retrieval_cancelled:
      "Passkey tekshiruvi bekor qilindi yoki vaqti tugadi.",
    passwordComplexity: {
      maximumLength: "{{length}} belgidan kam",
      minimumLength: "{{length}} yoki undan ko‘p belgi",
      requireLowercase: "kichik harf",
      requireNumbers: "raqam",
      requireSpecialCharacter: "maxsus belgi",
      requireUppercase: "katta harf",
      sentencePrefix: "Parolingiz quyidagilarni o‘z ichiga olishi kerak",
    },
    phone_number_exists: undefined,
    session_exists: undefined,
    web3_missing_identifier:
      "Web3 hamyon kengaytmasi topilmadi. Davom etish uchun uni o‘rnating.",
    zxcvbn: {
      couldBeStronger:
        "Parolingiz ishlaydi, lekin uni kuchaytirish mumkin. Ko‘proq belgilar qo‘shib ko‘ring.",
      goodPassword: "Parolingiz barcha talablarni qondiradi.",
      notEnough: "Parolingiz yetarlicha kuchli emas.",
      suggestions: {
        allUppercase:
          "Ba'zi harflarni katta qilib yozing, lekin hammasini emas.",
        anotherWord: "Kamroq uchraydigan so‘zlar qo‘shing.",
        associatedYears: "Siz bilan bog‘liq yillarni ishlatmang.",
        capitalization:
          "Faqat birinchi harfni emas, boshqa harflarni ham katta qiling.",
        dates: "Sana va yillarni ishlatmang.",
        l33t: "'@' o‘rniga 'a' kabi oson taxmin qilinadigan almashtirishlardan qoching.",
        longerKeyboardPattern:
          "Uzoqroq klaviatura naqshlari va yozish yo‘nalishini bir necha marta o‘zgartiring.",
        noNeed:
          "Belgilar, raqamlar yoki katta harflarsiz ham kuchli parol yaratishingiz mumkin.",
        pwned:
          "Agar ushbu paroldan boshqa joyda foydalansangiz, uni o‘zgartiring.",
        recentYears: "Yaqin yillarni ishlatmang.",
        repeated: "Takrorlanuvchi so‘z va belgilarni ishlatmang.",
        reverseWords: "Mashhur so‘zlarning teskari yozilishidan foydalanmang.",
        sequences: "Oddiy belgilar ketma-ketligini ishlatmang.",
        useWords:
          "Bir nechta so‘zlardan foydalaning, lekin oddiy iboralardan qoching.",
      },
      warnings: {
        common: "Bu keng tarqalgan parol.",
        commonNames: "Keng tarqalgan ism va familiyalar oson topiladi.",
        dates: "Sanalar oson topiladi.",
        extendedRepeat:
          '"abcabcabc" kabi takrorlanuvchi naqshlar oson topiladi.',
        keyPattern: "Qisqa klaviatura naqshlari oson topiladi.",
        namesByThemselves: "Yakka ism yoki familiyalar oson topiladi.",
        pwned:
          "Parolingiz internetdagi ma'lumotlar sizib chiqishida fosh bo‘lgan.",
        recentYears: "Yaqin yillar oson topiladi.",
        sequences: '"abc" kabi ketma-ket belgilar oson topiladi.',
        similarToCommon: "Bu keng tarqalgan parolga o‘xshaydi.",
        simpleRepeat: '"aaa" kabi takrorlanuvchi belgilar oson topiladi.',
        straightRow: "Klaviaturadagi bir qator tugmalar oson topiladi.",
        topHundred: "Bu eng ko‘p ishlatiladigan parollardan biri.",
        topTen: "Bu juda ko‘p ishlatiladigan parollardan biri.",
        userInputs: "Shaxsiy yoki sahifaga oid ma'lumotlarni ishlatmang.",
        wordByItself: "Yakka so‘zlar oson topiladi.",
      },
    },
  },

  userButton: {
    action__addAccount: "Akkaunt qo‘shish",
    action__manageAccount: "Akkauntni boshqarish",
    action__signOut: "Chiqish",
    action__signOutAll: "Barcha akkauntlardan chiqish",
  },
  userProfile: {
    apiKeysPage: {
      title: "API kalitlar",
    },
    backupCodePage: {
      actionLabel__copied: "Nusxa olindi!",
      actionLabel__copy: "Barchasini nusxalash",
      actionLabel__download: ".txt yuklab olish",
      actionLabel__print: "Chop etish",
      infoText1: "Zaxira kodlar ushbu akkaunt uchun yoqiladi.",
      infoText2:
        "Zaxira kodlarni maxfiy saqlang va xavfsiz joyda saqlang. Agar ular oshkor bo‘lganiga shubha qilsangiz, zaxira kodlarni qayta yaratishingiz mumkin.",
      subtitle__codelist: "Ularni xavfsiz joyda va maxfiy saqlang.",
      successMessage:
        "Zaxira kodlar yoqildi. Agar autentifikatsiya qurilmangizga kirish imkonini yo‘qotsangiz, akkauntingizga kirish uchun ushbu kodlardan birini ishlatishingiz mumkin. Har bir kod faqat bir marta ishlatilishi mumkin.",
      successSubtitle:
        "Agar autentifikatsiya qurilmangizga kirish imkonini yo‘qotsangiz, akkauntingizga kirish uchun ushbu kodlardan birini ishlatishingiz mumkin.",
      title: "Zaxira kod orqali tasdiqlashni qo‘shish",
      title__codelist: "Zaxira kodlar",
    },
    billingPage: {
      paymentHistorySection: {
        empty: "To‘lov tarixi yo‘q",
        notFound: "To‘lov urinish topilmadi",
        tableHeader__amount: "Miqdor",
        tableHeader__date: "Sana",
        tableHeader__status: "Holat",
      },
      paymentSourcesSection: {
        actionLabel__default: "Asosiy qilish",
        actionLabel__remove: "O‘chirish",
        add: "Yangi to‘lov usuli qo‘shish",
        addSubtitle: "Akkauntingizga yangi to‘lov usuli qo‘shing.",
        cancelButton: "Bekor qilish",
        formButtonPrimary__add: "To‘lov usulini qo‘shish",
        formButtonPrimary__pay: "{{amount}} to‘lash",
        payWithTestCardButton: "Test karta bilan to‘lash",
        removeResource: {
          messageLine1: "{{identifier}} ushbu akkauntdan o‘chiriladi.",
          messageLine2:
            "Endi ushbu to‘lov usulidan foydalana olmaysiz va unga bog‘liq barcha obunalar ishlamaydi.",
          successMessage: "{{paymentSource}} akkauntingizdan o‘chirildi.",
          title: "To‘lov usulini o‘chirish",
        },
        title: "To‘lov usullari",
      },
      start: {
        headerTitle__payments: "To‘lovlar",
        headerTitle__plans: "Tariflar",
        headerTitle__statements: "Hisobotlar",
        headerTitle__subscriptions: "Obuna",
      },
      statementsSection: {
        empty: "Ko‘rsatish uchun hisobotlar yo‘q",
        itemCaption__paidForPlan: "{{plan}} {{period}} tarif rejasiga to‘landi",
        itemCaption__proratedCredit:
          "Oldingi obunadan qisman foydalanish uchun qaytarilgan mablag‘",
        itemCaption__subscribedAndPaidForPlan:
          "{{plan}} {{period}} tarif rejasiga obuna bo‘lib to‘landi",
        notFound: "Hisobot topilmadi",
        tableHeader__amount: "Miqdor",
        tableHeader__date: "Sana",
        title: "Hisobotlar",
        totalPaid: "Jami to‘langan",
      },
      subscriptionsListSection: {
        actionLabel__newSubscription: "Tarifga obuna bo‘lish",
        actionLabel__switchPlan: "Tarifni almashtirish",
        tableHeader__edit: "Tahrirlash",
        tableHeader__plan: "Tarif",
        tableHeader__startDate: "Boshlanish sanasi",
        title: "Obuna",
      },
      subscriptionsSection: {
        actionLabel__default: "Boshqarish",
      },
      switchPlansSection: {
        title: "Tarifni almashtirish",
      },
      title: "Hisob-kitob",
    },
    connectedAccountPage: {
      formHint: "Akkauntingizni ulash uchun provayderni tanlang.",
      formHint__noAccounts: "Tashqi akkaunt provayderlari mavjud emas.",
      removeResource: {
        messageLine1: "{{identifier}} ushbu akkauntdan o‘chiriladi.",
        messageLine2:
          "Endi ushbu ulangan akkauntdan foydalana olmaysiz va unga bog‘liq funksiyalar ishlamaydi.",
        successMessage: "{{connectedAccount}} akkauntingizdan o‘chirildi.",
        title: "Ulangan akkauntni o‘chirish",
      },
      socialButtonsBlockButton: "{{provider|titleize}}",
      successMessage: "Provayder akkauntingizga qo‘shildi",
      title: "Ulangan akkaunt qo‘shish",
    },
    deletePage: {
      actionDescription:
        'Davom etish uchun pastga "Akkauntni o‘chirish" deb yozing.',
      confirm: "Akkauntni o‘chirish",
      messageLine1: "Akkauntingizni o‘chirishga ishonchingiz komilmi?",
      messageLine2: "Bu amal qaytarib bo‘lmaydi va doimiy hisoblanadi.",
      title: "Akkauntni o‘chirish",
    },

    emailAddressPage: {
      emailCode: {
        formHint: "Ushbu elektron pochta manziliga tasdiqlash kodi yuboriladi.",
        formSubtitle:
          "{{identifier}} manziliga yuborilgan tasdiqlash kodini kiriting",
        formTitle: "Tasdiqlash kodi",
        resendButton: "Kod kelmadimi? Qayta yuborish",
        successMessage:
          "{{identifier}} elektron pochtasi akkauntingizga qo‘shildi.",
      },
      emailLink: {
        formHint:
          "Ushbu elektron pochta manziliga tasdiqlash havolasi yuboriladi.",
        formSubtitle:
          "{{identifier}} manziliga yuborilgan tasdiqlash havolasini bosing",
        formTitle: "Tasdiqlash havolasi",
        resendButton: "Havola kelmadimi? Qayta yuborish",
        successMessage:
          "{{identifier}} elektron pochtasi akkauntingizga qo‘shildi.",
      },
      enterpriseSSOLink: {
        formButton: "Kirish uchun bosing",
        formSubtitle: "{{identifier}} orqali kirishni yakunlang",
      },
      formHint:
        "Bu elektron pochtani akkauntingizga qo‘shishdan oldin tasdiqlashingiz kerak.",
      removeResource: {
        messageLine1: "{{identifier}} ushbu akkauntdan o‘chiriladi.",
        messageLine2:
          "Endi ushbu elektron pochta orqali tizimga kira olmaysiz.",
        successMessage:
          "{{emailAddress}} elektron pochtasi akkauntingizdan o‘chirildi.",
        title: "Elektron pochtani o‘chirish",
      },
      title: "Elektron pochta qo‘shish",
      verifyTitle: "Elektron pochtani tasdiqlash",
    },
    formButtonPrimary__add: "Qo‘shish",
    formButtonPrimary__continue: "Davom etish",
    formButtonPrimary__finish: "Tugatish",
    formButtonPrimary__remove: "O‘chirish",
    formButtonPrimary__save: "Saqlash",
    formButtonReset: "Bekor qilish",
    mfaPage: {
      formHint: "Qo‘shish uchun usulni tanlang.",
      title: "Ikki bosqichli tasdiqlashni qo‘shish",
    },
    mfaPhoneCodePage: {
      backButton: "Mavjud raqamdan foydalanish",
      primaryButton__addPhoneNumber: "Telefon raqam qo‘shish",
      removeResource: {
        messageLine1:
          "{{identifier}} tizimga kirishda tasdiqlash kodlarini olmaydi.",
        messageLine2:
          "Akkauntingiz xavfsizligi pasayishi mumkin. Davom etishni xohlaysizmi?",
        successMessage:
          "SMS kod orqali ikki bosqichli tasdiqlash {{mfaPhoneCode}} uchun o‘chirildi",
        title: "Ikki bosqichli tasdiqlashni o‘chirish",
      },
      subtitle__availablePhoneNumbers:
        "SMS kod orqali ikki bosqichli tasdiqlash uchun mavjud telefon raqamni tanlang yoki yangi qo‘shing.",
      subtitle__unavailablePhoneNumbers:
        "SMS kod orqali ikki bosqichli tasdiqlash uchun mavjud raqamlar yo‘q, yangi qo‘shing.",
      successMessage1:
        "Kirishda ushbu telefon raqamga yuborilgan tasdiqlash kodini kiritishingiz kerak bo‘ladi.",
      successMessage2:
        "Zaxira kodlarni saqlab qo‘ying. Agar autentifikatsiya qurilmangizga kirish imkonini yo‘qotsangiz, ushbu kodlar yordamida tizimga kira olasiz.",
      successTitle: "SMS kod orqali tasdiqlash yoqildi",
      title: "SMS kod orqali tasdiqlashni qo‘shish",
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: "QR kodni skanerlash",
        buttonUnableToScan__nonPrimary: "QR kodni skanerlay olmaysizmi?",
        infoText__ableToScan:
          "Autentifikatsiya ilovasida yangi tizimga kirish usulini sozlab, quyidagi QR kodni skanerlang.",
        infoText__unableToScan:
          "Autentifikatsiya ilovasida yangi tizimga kirish usulini sozlab, quyida berilgan Kalitni kiriting.",
        inputLabel__unableToScan1:
          "Vaqtga asoslangan yoki bir martalik parollar yoqilganligiga ishonch hosil qiling, so‘ng akkauntingizni bog‘lashni yakunlang.",
        inputLabel__unableToScan2:
          "Yoki, agar autentifikatoringiz TOTP URI-larini qo‘llab-quvvatlasa, to‘liq URI ni ham nusxalashingiz mumkin.",
      },
      removeResource: {
        messageLine1:
          "Tizimga kirishda ushbu autentifikatordan kod talab qilinmaydi.",
        messageLine2:
          "Akkauntingiz xavfsizligi pasayishi mumkin. Davom etishni xohlaysizmi?",
        successMessage:
          "Autentifikatsiya ilovasi orqali ikki bosqichli tasdiqlash o‘chirildi.",
        title: "Ikki bosqichli tasdiqlashni o‘chirish",
      },
      successMessage:
        "Ikki bosqichli tasdiqlash yoqildi. Kirishda autentifikatordan olingan kod talab qilinadi.",
      title: "Autentifikatsiya ilovasini qo‘shish",
      verifySubtitle: "Autentifikator yaratgan tasdiqlash kodini kiriting",
      verifyTitle: "Tasdiqlash kodi",
    },

    mobileButton__menu: "Menyu",
    navbar: {
      account: "Profil",
      apiKeys: "API kalitlar",
      billing: "To‘lovlar",
      description: "Hisob ma’lumotlarini boshqarish.",
      security: "Xavfsizlik",
      title: "Hisob",
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: "{{name}} ushbu hisobdan olib tashlanadi.",
        title: "Passkey-ni olib tashlash",
      },
      subtitle__rename:
        "Passkey nomini o‘zgartirib, uni topishni osonlashtirishingiz mumkin.",
      title__rename: "Passkey nomini o‘zgartirish",
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        "Eski parol ishlatilgan barcha qurilmalardan chiqishni tavsiya etamiz.",
      readonly:
        "Parolingizni hozircha o‘zgartirib bo‘lmaydi, chunki siz faqat korporativ ulanish orqali tizimga kira olasiz.",
      successMessage__set: "Parol muvaffaqiyatli o‘rnatildi.",
      successMessage__signOutOfOtherSessions:
        "Boshqa barcha qurilmalardan chiqildi.",
      successMessage__update: "Parol muvaffaqiyatli yangilandi.",
      title__set: "Parol o‘rnatish",
      title__update: "Parolni yangilash",
    },
    phoneNumberPage: {
      infoText:
        "Ushbu raqamga tasdiqlash kodi yuboriladi. Xabar va ma’lumot tariflari qo‘llanilishi mumkin.",
      removeResource: {
        messageLine1: "{{identifier}} ushbu hisobdan olib tashlanadi.",
        messageLine2: "Endi ushbu telefon raqami bilan tizimga kira olmaysiz.",
        successMessage: "{{phoneNumber}} hisobingizdan olib tashlandi.",
        title: "Telefon raqamini olib tashlash",
      },
      successMessage: "{{identifier}} hisobingizga qo‘shildi.",
      title: "Telefon raqami qo‘shish",
      verifySubtitle:
        "Tasdiqlash kodini {{identifier}} raqamiga yuborilgan xabar orqali kiriting",
      verifyTitle: "Telefon raqamini tasdiqlash",
    },
    plansPage: {
      title: "Tariflar",
    },
    profilePage: {
      fileDropAreaHint: "Tavsiya etilgan o‘lcham 1:1, hajmi 10MB gacha.",
      imageFormDestructiveActionSubtitle: "Olib tashlash",
      imageFormSubtitle: "Yuklash",
      imageFormTitle: "Profil rasmi",
      readonly:
        "Profil ma’lumotlaringiz korporativ ulanish orqali berilgan va o‘zgartirib bo‘lmaydi.",
      successMessage: "Profil muvaffaqiyatli yangilandi.",
      title: "Profilni yangilash",
    },
    start: {
      activeDevicesSection: {
        destructiveAction: "Qurilmadan chiqish",
        title: "Faol qurilmalar",
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: "Qayta ulash",
        actionLabel__reauthorize: "Hozir ruxsat berish",
        destructiveActionTitle: "Olib tashlash",
        primaryButton: "Hisob ulash",
        subtitle__disconnected: "Ushbu hisob uzilgan.",
        subtitle__reauthorize:
          "Kerakli ruxsatlar yangilangan. Muammolarning oldini olish uchun qayta ruxsat bering.",
        title: "Ulangan hisoblar",
      },
      dangerSection: {
        deleteAccountButton: "Hisobni o‘chirish",
        title: "Hisobni o‘chirish",
      },
      emailAddressesSection: {
        destructiveAction: "Emailni olib tashlash",
        detailsAction__nonPrimary: "Asosiy sifatida belgilash",
        detailsAction__primary: "Tasdiqlashni yakunlash",
        detailsAction__unverified: "Tasdiqlash",
        primaryButton: "Email manzil qo‘shish",
        title: "Email manzillar",
      },
      enterpriseAccountsSection: {
        title: "Korporativ hisoblar",
      },
      headerTitle__account: "Profil tafsilotlari",
      headerTitle__security: "Xavfsizlik",
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: "Qayta yaratish",
          headerTitle: "Zaxira kodlari",
          subtitle__regenerate:
            "Yangi zaxira kodlarini oling. Eski kodlar o‘chirilib, ishlatilmaydi.",
          title__regenerate: "Zaxira kodlarini qayta yaratish",
        },
        phoneCode: {
          actionLabel__setDefault: "Asosiy sifatida belgilash",
          destructiveActionLabel: "Olib tashlash",
        },
        primaryButton: "Ikki bosqichli tekshiruv qo‘shish",
        title: "Ikki bosqichli tekshiruv",
        totp: {
          destructiveActionTitle: "Olib tashlash",
          headerTitle: "Autentifikatsiya ilovasi",
        },
      },
      passkeysSection: {
        menuAction__destructive: "Olib tashlash",
        menuAction__rename: "Nomini o‘zgartirish",
        primaryButton: "Passkey qo‘shish",
        title: "Passkey-lar",
      },
      passwordSection: {
        primaryButton__setPassword: "Parol o‘rnatish",
        primaryButton__updatePassword: "Parolni yangilash",
        title: "Parol",
      },
      phoneNumbersSection: {
        destructiveAction: "Telefon raqamini olib tashlash",
        detailsAction__nonPrimary: "Asosiy sifatida belgilash",
        detailsAction__primary: "Tasdiqlashni yakunlash",
        detailsAction__unverified: "Telefon raqamini tasdiqlash",
        primaryButton: "Telefon raqami qo‘shish",
        title: "Telefon raqamlari",
      },
      profileSection: {
        primaryButton: "Profilni yangilash",
        title: "Profil",
      },
      usernameSection: {
        primaryButton__setUsername: "Foydalanuvchi nomini o‘rnatish",
        primaryButton__updateUsername: "Foydalanuvchi nomini yangilash",
        title: "Foydalanuvchi nomi",
      },
      web3WalletsSection: {
        destructiveAction: "Hamyonni olib tashlash",
        detailsAction__nonPrimary: "Asosiy sifatida belgilash",
        primaryButton: "Hamyon ulash",
        title: "Web3 hamyonlar",
      },
    },

    usernamePage: {
      successMessage: "Foydalanuvchi nomingiz yangilandi.",
      title__set: "Foydalanuvchi nomini o‘rnatish",
      title__update: "Foydalanuvchi nomini yangilash",
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: "{{identifier}} ushbu akkauntdan olib tashlanadi.",
        messageLine2:
          "Endi ushbu Web3 hamyonidan foydalanib tizimga kira olmaysiz.",
        successMessage: "{{web3Wallet}} akkauntingizdan olib tashlandi.",
        title: "Web3 hamyonni olib tashlash",
      },
      subtitle__availableWallets:
        "Akkauntingizga ulash uchun Web3 hamyonini tanlang.",
      subtitle__unavailableWallets: "Mavjud Web3 hamyonlari yo‘q.",
      successMessage: "Hamyon akkauntingizga qo‘shildi.",
      title: "Web3 hamyon qo‘shish",
      web3WalletButtonsBlockButton: "{{provider|titleize}}",
    },
  },
  waitlist: {
    start: {
      actionLink: "Kirish",
      actionText: "Allaqachon kirish huquqiga egamisiz?",
      formButton: "Kutish ro‘yxatiga qo‘shilish",
      subtitle:
        "Elektron pochta manzilingizni kiriting va navbatingiz kelganda sizga xabar beramiz",
      title: "Kutish ro‘yxatiga qo‘shilish",
    },
    success: {
      message: "Tez orada siz yo‘naltirilasiz...",
      subtitle: "Navbatingiz kelganda siz bilan bog‘lanamiz",
      title: "Kutish ro‘yxatiga qo‘shilganingiz uchun rahmat!",
    },
  },
} as const;
