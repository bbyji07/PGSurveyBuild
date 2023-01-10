// This dictionary contains 270 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.
import { editorLocalization } from "survey-creator-core";

export var skStrings = {
  // survey templates
  survey: {
    edit: "Upraviť",
    externalHelpLink: "Sledovať a zistiť, ako vytvárať prieskumy",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Sem zadajte otázku zo súpravy nástrojov.",
    addLogicItem: "Vytvoriť pravidlo prispôsobenia priebehu prieskumu.",
    copy: "Kopírovať",
    duplicate: "Duplikovať",
    addToToolbox: "Pridať do súpravy nástrojov",
    deletePanel: "Odstrániť panel",
    deleteQuestion: "Odstrániť otázku",
    convertTo: "Konvertovať na",
    drag: "Presunúť prvok"
  },
  // Question types
  qt: {
    default: "Predvolené",
    checkbox: "Začiarkavacie políčko",
    comment: "Komentár",
    imagepicker: "Nástroj na výber obrázkov",
    ranking: "Hodnotenie",
    image: "Obrázok",
    dropdown: "Rozbaľovací zoznam",
    // tagbox: "Tag Box",
    file: "Súbor",
    html: "Html",
    matrix: "Matica (jedna možnosť)",
    matrixdropdown: "Matica (viacero možností)",
    matrixdynamic: "Matica (dynamické riadky)",
    multipletext: "Text pri viacerých možnostiach",
    panel: "Panel",
    paneldynamic: "Panel (dynamické panely)",
    radiogroup: "Skupina tlačidiel",
    rating: "Hodnotenie",
    text: "Jeden vstup",
    boolean: "Boolean",
    expression: "Výraz (iba na čítanie)",
    signaturepad: "Priestor na podpis",
    // buttongroup: "Button Group",
    flowpanel: "Panel priebehu"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Predvolené ({0})",
    survey: "Prieskum",
    settings: "Nastavenia prieskumu",
    settingsTooltip: "Otvoriť nastavenia prieskumu",
    // surveySettings: "Survey Settings",
    // surveySettingsTooltip: "Open survey settings",
    showPanel: "Zobraziť panel",
    hidePanel: "Skryť panel",
    // prevSelected: "Select previous",
    // nextSelected: "Select next",
    // surveyTypeName: "Survey",
    // pageTypeName: "Page",
    // panelTypeName: "Panel",
    // questionTypeName: "Question",
    // columnTypeName: "Column",
    addNewPage: "Pridať novú stranu",
    moveRight: "Prejsť vpravo",
    moveLeft: "Prejsť vľavo",
    deletePage: "Odstrániť stranu",
    editPage: "Upraviť stranu",
    edit: "Upraviť",
    newPageName: "stránka",
    newQuestionName: "otázka",
    newPanelName: "panel",
    newTextItemName: "text",
    testSurvey: "Textový prieskum",
    // defaultV2Theme: "Default",
    // modernTheme: "Modern",
    // defaultTheme: "Default (legacy)",
    testSurveyAgain: "Ďalší textový prieskum",
    testSurveyWidth: "Šírka prieskumu: ",
    navigateToMsg: "Museli ste prejsť na:",
    logic: "Logika prieskumu",
    embedSurvey: "Začleniť prieskum",
    translation: "Preklad",
    saveSurvey: "Uložiť prieskum",
    saveSurveyTooltip: "Uložiť prieskum",
    designer: "Návrhár prieskumov",
    jsonEditor: "Editor JSON",
    // jsonHideErrors: "Hide errors",
    // jsonShowErrors: "Show errors",
    undo: "Späť",
    redo: "Opakovať",
    undoTooltip: "Zrušiť poslednú zmenu",
    redoTooltip: "Opakovať zmenu",
    // showMoreChoices: "Show more",
    // showLessChoices: "Show less",
    copy: "Kopírovať",
    cut: "Vystrihnúť",
    paste: "Prilepiť",
    copyTooltip: "Kopírovať výber do schránky",
    cutTooltip: "Vystrihnúť výber do schránky",
    pasteTooltip: "Prilepiť zo schránky",
    options: "Možnosti",
    generateValidJSON: "Vygenerovať platný JSON",
    generateReadableJSON: "Vygenerovať načítateľný JSON",
    toolbox: "Súprava nástrojov",
    "property-grid": "Vlastnosti",
    // propertyGridFilteredTextPlaceholder: "Type to search...",
    toolboxGeneralCategory: "Všeobecné",
    // toolboxChoiceCategory: "Choice Questions",
    // toolboxTextCategory: "Text Input Questions",
    // toolboxContainersCategory: "Containers",
    // toolboxMatrixCategory: "Matrix Questions",
    // toolboxMiscCategory: "Misc",
    correctJSON: "Opravte JSON.",
    surveyResults: "Výsledok prieskumu: ",
    surveyResultsTable: "Ako tabuľku",
    surveyResultsJson: "Ako JSON",
    resultsTitle: "Titul otázky",
    resultsName: "Názov otázky",
    resultsValue: "Hodnota odpovede",
    resultsDisplayValue: "Zobraziť hodnotu",
    modified: "Upravené",
    saving: "Ukladanie",
    saved: "Uložené",
    propertyEditorError: "Chyba:",
    saveError: "Chyba! Obsah editora sa neuložil.",
    // translationPropertyGridTitle: "Language Settings",
    // translationLanguages: "Languages",
    translationAddLanguage: "Výber jazyka na preklad",
    translationShowAllStrings: "Zobraziť všetky reťazce",
    // translationShowUsedStringsOnly: "Used Strings Only",
    translationShowAllPages: "Zobraziť všetky stránky",
    translationNoStrings: "Žiadne reťazce na preklad. Zmeňte filter.",
    translationExportToSCVButton: "Exportovať do CSV",
    translationImportFromSCVButton: "Importovať z CSV",
    translationMergeLocaleWithDefault: "Zlúčiť {0} s predvoleným miestnym nastavením",
    // translationPlaceHolder: "Translation...",
    bold: "Tučné",
    italic: "Kurzíva",
    underline: "Podčiarknutie",
    addNewQuestion: "Pridať otázku",
    selectPage: "Vybrať stránku...",
    // htmlPlaceHolder: "HTML content will be here.",
    // panelPlaceHolder: "Drop a question from the toolbox here.",
    // surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below.",
    // addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    // chooseLogoPlaceholder: "[LOGO]",
    // auto: "auto",
    lg: {
      // addNewItem: "Add New Rule",
      // empty_tab: "Create a rule to customize the flow of the survey.",
      page_visibilityName: "Viditeľnosť strany",
      // page_enableName: "Enable (disable) page",
      panel_visibilityName: "Viditeľnosť panela",
      panel_enableName: "Panel povoliť/zakázať",
      question_visibilityName: "Viditeľnosť otázky",
      question_enableName: "Otázku povoliť/zakázať",
      question_requireName: "Vyžaduje sa voliteľná otázka",
      // column_visibilityName: "Show (hide) column",
      // column_enableName: "Enable (disable) column",
      // column_requireName: "Make column required",
      trigger_completeName: "Dokončiť prieskum",
      trigger_setvalueName: "Nastaviť hodnotu otázky",
      trigger_copyvalueName: "Kopírovať hodnotu otázky",
      trigger_skipName: "Prejsť na otázku",
      trigger_runExpressionName: "Spustiť vlastný výraz",
      completedHtmlOnConditionName: "Vlastný text stránky s poďakovaním",
      page_visibilityDescription: "Stránka bude viditeľná, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      panel_visibilityDescription: "Panel bude viditeľný, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      panel_enableDescription: "Panel a všetky jeho prvky sa povolia, keď logický výraz vráti hodnotu true. V opačnom prípade budú zakázané.",
      question_visibilityDescription: "Otázka bude viditeľná, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      question_enableDescription: "Otázka sa povolí, keď logický výraz vráti hodnotu true. V opačnom prípade zostane zakázaná.",
      question_requireDescription: "Otázka bude povinná, keď logický výraz vráti hodnotu true.",
      trigger_completeDescription: "Keď logický výraz vráti hodnotu true, prieskum bude dokončený a používateľovi sa zobrazí stránka s poďakovaním.",
      trigger_setvalueDescription: "V prípade, že sa zmenia hodnoty, ktoré sa používajú v rámci logického výrazu, a logický výraz vráti hodnotu true, pre vybratú otázku sa nastaví daná hodnota.",
      trigger_copyvalueDescription: "V prípade, že sa zmenia hodnoty otázok, ktoré sa používajú v rámci logického výrazu, a logický výraz vráti hodnotu true, hodnota jednej vybratej otázky sa skopíruje na ďalšiu vybratú otázku.",
      trigger_skipDescription: "Keď logický výraz vráti hodnotu true, prieskum prejde/nastaví sa na vybratú otázku.",
      trigger_runExpressionDescription: "Keď logický výraz vráti hodnotu true, vykoná sa vlastný výraz. Voliteľne môžete nastaviť tento výraz na vybratú otázku.",
      completedHtmlOnConditionDescription: "Keď logický výraz vráti hodnotu true, predvolený text na stránke s poďakovaním sa zmení na zadaný text.",
      itemExpressionText: "Keď výraz: „{0}“ vráti hodnotu true:", //{0} - the expression
      // itemEmptyExpressionText: "New rule",
      page_visibilityText: "Stránka {0} bude viditeľná", //{0} page name
      panel_visibilityText: "Panel {0} bude viditeľný", //{0} panel name
      panel_enableText: "Panel {0} bude povolený", //{0} panel name
      question_visibilityText: "Otázka {0} bude viditeľná", //{0} question name
      question_enableText: "Otázka {0} bude povolená", //{0} question name
      question_requireText: "Otázka {0} sa bude vyžadovať", //{0} question name
      // column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
      // column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
      // column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
      trigger_completeText: "Prieskum bude dokončený",
      trigger_setvalueText: "Nastaviť v otázke: {0} hodnotu {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Kopírovať do otázky: {0} hodnotu z otázky {1}", //{0} and {1} question names
      trigger_skipText: "V prieskume prejsť na otázku {0}", //{0} question name
      trigger_runExpressionText1: "Spustiť výraz: „{0}“", //{0} the expression
      trigger_runExpressionText2: " a nastaviť výsledok v otázke: {0}", //{0} question name
      completedHtmlOnConditionText: "Zobraziť vlastný text pre stránku s poďakovaním.",
      // showAllQuestions: "All Questions",
      // showAllActionTypes: "All Action Types",
      conditions: "Podmienka(-y)",
      actions: "Akcia(-e)",
      expressionEditorTitle: "Definovať podmienku(-y)",
      actionsEditorTitle: "Definovať akciu(-e)",
      deleteAction: "Odstrániť akciu",
      addNewAction: "Pridať novú akciu",
      selectedActionCaption: "Vybrať akciu na pridanie...",
      expressionInvalid: "Logický výraz je prázdny alebo neplatný. Opravte ho.",
      noActionError: "Pridajte aspoň jednu akciu.",
      actionInvalid: "Odstráňte problémy v akcii(-ách).",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "Použiť",
    ok: "OK",
    save: "Uložiť",
    // clear: "Clear",
    saveTooltip: "Uložiť",
    cancel: "Zrušiť",
    // set: "Set",
    reset: "Obnovenie pôvodného nastavenia",
    // change: "Change",
    refresh: "Obnoviť",
    // close: "Close",
    delete: "Vymazať",
    add: "Pridať",
    addNew: "Pridať nové",
    addItem: "Kliknutím pridať položku...",
    // removeItem: "Click to remove the item...",
    // dragItem: "Drag the item",
    addOther: "Iné",
    addSelectAll: "Vybrať všetky",
    addNone: "Žiadne",
    removeAll: "Odstrániť všetko",
    edit: "Upraviť",
    back: "Návrat bez uloženia",
    backTooltip: "Návrat bez uloženia",
    saveAndBack: "Uložiť a vrátiť sa",
    saveAndBackTooltip: "Uložiť a vrátiť sa",
    // doneEditing: "Done",
    editChoices: "Upraviť možnosti",
    showChoices: "Zobraziť možnosti",
    move: "Presunúť",
    empty: "<empty>",
    // emptyValue: "Value is empty",
    fastEntry: "Rýchle zadanie",
    // fastEntryNonUniqueError: "Value '{0}' is not unique",
    // fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    // fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
    formEntry: "Zadanie formulára",
    testService: "Test služby",
    itemSelectorEmpty: "Vyberte prvok",
    conditionActionEmpty: "Vyberte akciu",
    conditionSelectQuestion: "Vybrať otázku...",
    conditionSelectPage: "Vybrať stránku...",
    conditionSelectPanel: "Vybrať panel...",
    conditionValueQuestionTitle: "Zadajte/vyberte hodnotu",
    expressionHelp: "Pomocou zložených zátvoriek môžete získať prístup k hodnotám otázok: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). Môžete používať funkcie ako: iif(), today(), age(), min(), max(), count(), avg() a iné.",
    aceEditorHelp: "Klávesovou skratkou ctrl+space získate tip na dokončenie výrazu",
    aceEditorRowTitle: "Aktuálny riadok",
    aceEditorPanelTitle: "Aktuálny panel",
    showMore: "Ďalšie podrobnosti nájdete v dokumentácii",
    assistantTitle: "Dostupné otázky:",
    cellsEmptyRowsColumns: "K dispozícii má byť aspoň jeden stĺpec alebo riadok",
    // showPreviewBeforeComplete: "Preview answers before submitting the survey",
    propertyIsEmpty: "Zadajte hodnotu",
    propertyIsNoUnique: "Zadajte jedinečnú hodnotu",
    propertyNameIsNotUnique: "Zadajte jedinečný názov",
    listIsEmpty: "Pridajte novú položku",
    // "listIsEmpty@choices": "No choices have been added yet",
    // "addNew@choices": "Add a choice",
    expressionIsEmpty: "Výraz je prázdny",
    value: "Hodnota",
    text: "Text",
    rowid: "ID riadka",
    imageLink: "Odkaz na obrázok",
    columnEdit: "Upraviť stĺpec: {0}",
    itemEdit: "Upraviť položku: {0}",
    url: "URL",
    path: "Cesta",
    valueName: "Názov hodnoty",
    choicesbyurl: {
      // valueName: "Get values from the following JSON field"
    },
    titleName: "Titulný názov",
    // imageLinkName: "Get image URLs from the following JSON field",
    allowEmptyResponse: "Povoliť prázdnu odozvu",
    titlePlaceholder: "Sem zadajte titul",
    surveyTitlePlaceholder: "Sem vložte titul prieskumu",
    pageTitlePlaceholder: "Sem zadajte titul stránky",
    descriptionPlaceholder: "Zadať opis",
    surveyDescriptionPlaceholder: "Zadať opis prieskumu",
    pageDescriptionPlaceholder: "Zadať opis stránky",
    showOtherItem: "Obsahuje inú položku",
    otherText: "Text inej položky",
    showNoneItem: "Neobsahuje žiadnu položku",
    noneText: "Text pri žiadnej položke",
    showSelectAllItem: "Obsahuje vybraté všetky položky",
    selectAllText: "Text pri výbere všetkých položiek",
    choicesMin: "Minimálna hodnota pre automaticky vygenerované položky",
    choicesMax: "Maximálna hodnota pre automaticky vygenerované položky",
    choicesStep: "Rozdiel medzi automaticky vygenerovanými položkami",
    name: "Názov",
    title: "Titul",
    cellType: "Typ bunky",
    colCount: "Počet stĺpcov",
    choicesOrder: "Poradie vybratých možností",
    visible: "Je viditeľné?",
    isRequired: "Vyžaduje sa?",
    isAllRowRequired: "Vyžadovať odpoveď pre všetky riadky",
    requiredErrorText: "Text chyby pri povinných položkách",
    startWithNewLine: "Začína sa novým riadkom?",
    rows: "Počet riadkov",
    cols: "Počet stĺpcov",
    placeholder: "Vložiť zástupný symbol",
    showPreview: "Zobraziť oblasť náhľadu",
    storeDataAsText: "Uložiť obsahu súboru vo výsledku JSON ako text",
    maxSize: "Maximálna veľkosť súboru v bajtoch",
    imageHeight: "Výška obrázka",
    imageWidth: "Šírka obrázka",
    rowCount: "Počet riadkov",
    columnLayout: "Rozloženie stĺpcov",
    addRowLocation: "Poloha tlačidla na pridanie riadka",
    addRowText: "Text tlačidla na pridanie riadka",
    removeRowText: "Text tlačidla na odstránenie riadka",
    rateMin: "Minimálne hodnotenie",
    rateMax: "Maximálne hodnotenie",
    rateStep: "Krok hodnotenia",
    minRateDescription: "Opis minimálneho hodnotenia",
    maxRateDescription: "opis maximálneho hodnotenia",
    inputType: "Typ vstupu",
    optionsCaption: "Titulok možností",
    defaultValue: "Predvolená hodnota",
    cellsDefaultRow: "Predvolené texty buniek",
    surveyEditorTitle: "Upraviť nastavenia prieskumu",
    qEditorTitle: "Upraviť: {0}",
    maxLength: "Maximálna dĺžka",
    buildExpression: "Zostaviť",
    editExpression: "Upraviť",
    and: "A",
    or: "Alebo",
    remove: "Odstrániť",
    addCondition: "Pridať podmienku",
    // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
    // if: "If",
    // then: "then",
    // setToName: "Target question",
    // fromName: "Question to copy answer from",
    // gotoName: "Question to skip to",
    // ruleIsNotSet: "Rule is incorrect",
    // includeIntoResult: "Include into survey results",
    showTitle: "Zobraziť/skryť titul",
    expandCollapseTitle: "Rozbaliť/zbaliť titul",
    locale: "Predvolený jazyk",
    simulator: "Vybrať zariadenie",
    landscapeOrientation: "Na šírku",
    // portraitOrientation: "Switch to portrait orientation",
    mode: "Režim (upraviť/iba na čítanie)",
    clearInvisibleValues: "Odstrániť neviditeľné hodnoty",
    cookieName: "Názov súboru cookie (na zabránenie lokálneho spustenia prieskumu dvakrát)",
    sendResultOnPageNext: "Odoslať výsledky prieskumu na ďalšiu stránku",
    storeOthersAsComment: "Uložiť hodnotu „iné“ v samostatnom poli",
    showPageTitles: "Zobraziť tituly stránok",
    showPageNumbers: "Zobraziť čísla stránok",
    pagePrevText: "Text tlačidla pre predchádzajúcu stránku",
    pageNextText: "Text tlačidla pre ďalšiu stránku",
    completeText: "Text tlačidla dokončenia",
    previewText: "Text tlačidla ukážky",
    editText: "Text tlačidla úpravy",
    startSurveyText: "Text tlačidla spustenia",
    showNavigationButtons: "Zobraziť navigačné tlačidlá (predvolená navigácia)",
    showPrevButton: "Zobraziť tlačidlo predchádzajúce (používateľ sa môže vráiť na predchádzajúcu stránku)",
    firstPageIsStarted: "Prvá stránka v prieskume je úvodná stránka.",
    showCompletedPage: "Na konci zobraziť stránku s dokončením (completedHtml)",
    goNextPageAutomatic: "Po zodpovedaní všetkých otázok prejsť na ďalšiu stránku automaticky",
    showProgressBar: "Zobraziť indikátor priebehu",
    questionTitleLocation: "Poloha titulu otázky",
    requiredText: "Povinný symbol(-y) otázok",
    questionStartIndex: "Otázka sa začína indexom (1, 2 alebo „A“, „a“)",
    showQuestionNumbers: "Zobraziť čísla otázok",
    questionTitleTemplate: "Šablóna titulu otázky, predvolená je:  „{no}. {require} {title}“",
    questionErrorLocation: "Poloha chyby otázky",
    focusFirstQuestionAutomatic: "Prechod na prvú otázku pri zmene stránky",
    questionsOrder: "Poradie prvkov na stránke",
    maxTimeToFinish: "Maximálny čas na dokončenie prieskumu",
    maxTimeToFinishPage: "Maximálny čas na dokončenie stránky v rámci prieskumu",
    page: {
      // maxTimeToFinish: "Time limit to finish the page (in seconds)"
    },
    question: {
      // page: "Parent page"
    },
    showTimerPanel: "Zobraziť panel s časovačom",
    showTimerPanelMode: "Zobraziť režim panela s časovačom",
    renderMode: "Režim vykresľovania",
    allowAddPanel: "Povoliť pridanie panela",
    allowRemovePanel: "Povoliť odstránenie panela",
    // noEntriesText: "Empty entries text",
    panelAddText: "Text pri pridaní panela",
    panelRemoveText: "Text pri odstránení panela",
    isSinglePage: "Zobraziť všetky prvky na jednej stránke",
    html: "Html",
    expression: "Výraz",
    // setValue: "Answer",
    // dataFormat: "Image format",
    // allowAddRows: "Allow adding rows",
    // allowRemoveRows: "Allow removing rows",
    // allowRowsDragAndDrop: "Allow row drag and drop",
    // responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height.",
    // minImageWidth: "Minimum image width",
    // maxImageWidth: "Maximum image width",
    // minImageHeight: "Minimum image height",
    // maxImageHeight: "Maximum image height",
    minValue: "Minimálna hodnota",
    maxValue: "Maximálna hodnota",
    minLength: "Minimálna dĺžka",
    allowDigits: "Povoliť čísla",
    minCount: "Minimálny počet",
    maxCount: "Maximálny počet",
    regex: "Regulárny výraz",
    surveyvalidator: {
      // text: "Error message",
      // expression: "Validation expression"
    },
    totalText: "Celkom – text",
    totalType: "Celkom – typ",
    totalExpression: "Celkom – výraz",
    totalDisplayStyle: "Celkom – štýl zobrazenia",
    totalCurrency: "Celkom – mena",
    totalFormat: "Celkom – formát",
    // logo: "Logo (URL or base64-encoded string)",
    // questionsOnPageMode: "Survey structure",
    // maxTextLength: "Maximum answer length (in characters)",
    // maxOthersLength: "Maximum comment length (in characters)",
    // autoGrowComment: "Auto-expand comment area if necessary",
    // textUpdateMode: "Update text question value",
    // focusOnFirstError: "Set focus on the first invalid answer",
    // checkErrorsMode: "Run validation",
    // navigateToUrl: "Navigate to URL",
    // navigateToUrlOnCondition: "Dynamic URL",
    // completedBeforeHtml: "Markup to show if the user already filled out this survey",
    // completedHtml: "Survey Complete page markup",
    // completedHtmlOnCondition: "Dynamic Survey Complete page markup",
    // loadingHtml: "Markup to show while survey model is loading",
    // commentText: "Comment area text",
    // autocomplete: "Autocomplete type",
    // labelTrue: "\"True\" label",
    // labelFalse: "\"False\" label",
    allowClear: "Zobraziť titulok možností",
    // displayStyle: "Value display style",
    // format: "Formatted string",
    // maximumFractionDigits: "Maximum fractional digits",
    // minimumFractionDigits: "Minimum fractional digits",
    // useGrouping: "Display grouping separators",
    // allowMultiple: "Allow multiple files",
    // allowImagesPreview: "Preview images",
    // acceptedTypes: "Accepted file types",
    // waitForUpload: "Wait for the upload to complete",
    // needConfirmRemoveFile: "Confirm file deletion",
    // detailPanelMode: "Detail panel location",
    // minRowCount: "Minimum row count",
    // maxRowCount: "Maximum row count",
    // confirmDelete: "Confirm row deletion",
    // confirmDeleteText: "Confirmation message",
    paneldynamic: {
      // confirmDelete: "Confirm panel deletion"
    },
    // panelCount: "Initial panel count",
    // minPanelCount: "Minimum panel count",
    // maxPanelCount: "Maximum panel count",
    // panelsState: "Inner panel expand state",
    // templateDescription: "Description template",
    // templateTitle: "Title template",
    // panelPrevText: "Previous Panel button tooltip",
    // panelNextText: "Next Panel button tooltip",
    // showRangeInProgress: "Show progress bar",
    // templateTitleLocation: "Question title location",
    // panelRemoveButtonLocation: "Remove Panel button location",
    // hideIfRowsEmpty: "Hide the question if there are no rows",
    // hideColumnsIfEmpty: "Hide columns if there are no rows",
    // rateValues: "Custom rate values",
    // hideIfChoicesEmpty: "Hide the question if it contains no choices",
    // hideNumber: "Hide question number",
    // minWidth: "Minimum width (in CSS-accepted values)",
    // maxWidth: "Maximum width (in CSS-accepted values)",
    // width: "Width (in CSS-accepted values)",
    // showHeader: "Show column headers",
    // horizontalScroll: "Show horizontal scrollbar",
    // columnMinWidth: "Minimum column width (in CSS-accepted values)",
    // rowTitleWidth: "Row header width (in CSS-accepted values)",
    // valueTrue: "\"True\" value",
    // valueFalse: "\"False\" value",
    // minErrorText: "\"Value is below minimum\" error message",
    // maxErrorText: "\"Value exceeds maximum\" error message",
    // otherErrorText: "\"Empty comment\" error message",
    // keyDuplicationError: "\"Non-unique key value\" error message",
    // maxSelectedChoices: "Maximum selected choices",
    // showClearButton: "Show the Clear button",
    // showNumber: "Show panel number",
    // logoWidth: "Logo width (in CSS-accepted values)",
    // logoHeight: "Logo height (in CSS-accepted values)",
    // readOnly: "Read-only",
    // enableIf: "Editable if",
    // emptyRowsText: "\"No rows\" message",
    // size: "Input size (in characters)",
    // separateSpecialChoices: "Separate special choices (None, Other, Select All)",
    // choicesFromQuestion: "Copy choices from the following question",
    // choicesFromQuestionMode: "Which choices to copy?",
    // showCommentArea: "Show the comment area",
    // commentPlaceholder: "Comment area placeholder",
    // displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
    // rowsOrder: "Row order",
    // columnsLayout: "Column layout",
    // columnColCount: "Nested column count",
    // state: "Panel expand state",
    // correctAnswer: "Correct Answer",
    // defaultPanelValue: "Default Values",
    // cells: "Cell Texts",
    // keyName: "Key column",
    itemvalue: {
      // text: "Alt text"
    },
    logoPosition: "Poloha loga",
    addLogo: "Pridať logo...",
    changeLogo: "Zmeniť logo...",
    logoPositions: {
      none: "Odstrániť logo",
      left: "Vľavo",
      right: "Vpravo",
      top: "V hornej časti",
      bottom: "V spodnej časti"
    },
    tabs: {
      general: "Všeobecné",
      fileOptions: "Možnosti",
      html: "Editor Html",
      columns: "Stĺpce",
      rows: "Riadky",
      choices: "Možnosti",
      items: "Položky",
      visibleIf: "Viditeľné ak",
      enableIf: "Povoliť ak",
      requiredIf: "Povinné ak",
      rateValues: "Hodnoty hodnotenia",
      choicesByUrl: "Možnosti z webu",
      matrixChoices: "Predvolené možnosti",
      multipleTextItems: "Zadania textu",
      numbering: "Číslovanie",
      validators: "Overovatelia",
      navigation: "Navigácia",
      question: "Otázka",
      pages: "Stránky",
      timer: "Časovač/kvíz",
      calculatedValues: "Vypočítané hodnoty",
      triggers: "Aktivátory",
      templateTitle: "Titul šablóny",
      totals: "Celkové hodnoty",
      logic: "Logický výraz",
      layout: "Rozloženie",
      data: "Údaje",
      validation: "Overenie",
      cells: "Bunky",
      showOnCompleted: "Zobraziť pri dokončení",
      logo: "Logo v titule prieskumu",
      slider: "Jazdec",
      // expression: "Expression",
      others: "Iné"
    },
    editProperty: "Upraviť vlastnosť „{0}“",
    items: "[ Položky: {0} ]",
    // choicesVisibleIf: "Choices are visible if",
    // choicesEnableIf: "Choices are selectable if",
    // columnsEnableIf: "Columns are visible if",
    // rowsEnableIf: "Rows are visible if",
    // indent: "Add indents",
    panel: {
      // indent: "Add outer indents"
    },
    // innerIndent: "Add inner indents",
    // defaultValueFromLastRow: "Take default values from the last row",
    // defaultValueFromLastPanel: "Take default values from the last panel",
    enterNewValue: "Zadajte hodnotu.",
    noquestions: "V prieskume nie je žiadna otázka.",
    createtrigger: "Vytvorte aktivátor",
    titleKeyboardAdornerTip: "Upraviť stlačením tlačidla Enter",
    keyboardAdornerTip: "Stlačením tlačidla Enter položku upravíte, stlačením tlačidla Odstrániť položku odstránite, stlačením tlačidla Alt a šípky nahor alebo šípky nadol položku presuniete",
    triggerOn: "Zap. ",
    triggerMakePagesVisible: "Viditeľnosť stránok:",
    triggerMakeQuestionsVisible: "Viditeľnosť prvkov:",
    triggerCompleteText: "V prípade úspechu prieskum dokočniť.",
    triggerNotSet: "Aktivátor nie je nastavený",
    triggerRunIf: "Spustiť ak",
    triggerSetToName: "Zmeniť hodnotu: ",
    triggerFromName: "Kopírovať hodnotu z: ",
    triggerRunExpression: "Spustiť tento výraz:",
    triggerSetValue: "na: ",
    triggerGotoName: "Prejsť na otázku:",
    triggerIsVariable: "Nezaraďujte premennú do výsledku prieskumu.",
    triggerRunExpressionEmpty: "Zadajte platný výraz",
    // emptyExpressionPlaceHolder: "Type expression here...",
    noFile: "Nevybratý žiadny súbor",
    // clearIfInvisible: "Clear the value if the question becomes hidden",
    // valuePropertyName: "Value property name",
    // searchEnabled: "Enable search",
    // hideSelectedItems: "Hide selected items",
    // signatureWidth: "Signature width",
    // signatureHeight: "Signature height",
    // verticalAlign: "Vertical alignment",
    // alternateRows: "Alternate rows",
    // columnsVisibleIf: "Columns are visible if",
    // rowsVisibleIf: "Rows are visible if",
    // otherPlaceholder: "Comment area placeholder"
  },
  // Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "prevziať",
    show: "zobraziť",
    hide: "skryť",
    default: "predvolené",
    initial: "počiatočné",
    random: "náhodné",
    collapsed: "zbalené",
    expanded: "rozbalené",
    none: "žiadne",
    asc: "vzostupne",
    desc: "zostupne",
    indeterminate: "nestanovené",
    decimal: "desatinné",
    currency: "mena",
    percent: "percentá",
    firstExpanded: "prvý rozbalený",
    off: "vyp.",
    // onpanel: "Start on each panel",
    onPanel: "na paneli",
    onSurvey: "v prieskume",
    list: "zoznam",
    progressTop: "horná časť priebehu",
    progressBottom: "spodná časť priebehu",
    progressTopBottom: "priebeh –​ horná a spodná časť",
    horizontal: "vodorovné",
    vertical: "zvislé",
    top: "hore",
    bottom: "dolu",
    topBottom: "hore a dolu",
    both: "obidva",
    left: "vľavo",
    // right: "Right",
    color: "farba",
    date: "dátum",
    datetime: "dátum a čas",
    "datetime-local": "miestny dátum a čas",
    email: "e-mail",
    month: "mesiac",
    number: "číslo",
    password: "heslo",
    range: "rozsah",
    tel: "tel",
    text: "text",
    time: "čas",
    url: "url",
    week: "týždeň",
    hidden: "skryté",
    on: "na",
    onPage: "na stránke",
    edit: "upraviť",
    display: "zobraziť",
    onComplete: "pri dokončení",
    onHidden: "pri skrytí",
    // onHiddenContainer: "When the question or its panel/page becomes hidden",
    clearInvisibleValues: {
      // none: "Never"
    },
    all: "všetko",
    page: "stránka",
    survey: "prieskum",
    onNextPage: "na ďalšej stránke",
    onValueChanged: "pri zmene hodnoty",
    // onValueChanging: "Before an answer is changed",
    standard: "štandard",
    singlePage: "jedna stránka",
    questionPerPage: "otázka na stránku",
    noPreview: "žiadna ukážka",
    showAllQuestions: "zobraziť ukážku so všetkými otázkami",
    showAnsweredQuestions: "zobraziť ukážku so zodpovedanými otázkami",
    pages: "stránky",
    questions: "otázky",
    requiredQuestions: "povinné otázky",
    correctQuestions: "správne otázky",
    buttons: "tlačidlá",
    underInput: "v rámci vstupu",
    underTitle: "v rámci titulu",
    // onBlur: "On blur",
    // onTyping: "While typing",
    // underRow: "Under the row",
    // underRowSingle: "Under the row, only one panel is visible",
    showNavigationButtons: {
      // none: "Hidden"
    },
    showProgressBar: {
      // off: "Hidden"
    },
    showTimerPanel: {
      // none: "Hidden"
    },
    showTimerPanelMode: {
      // all: "Both"
    },
    detailPanelMode: {
      // none: "Hidden"
    },
    addRowLocation: {
      // default: "Depends on matrix layout"
    },
    panelsState: {
      // default: "Users cannot expand or collapse panels",
      // collapsed: "All panels are collapsed",
      // expanded: "All panels are expanded"
    },
    widthMode: {
      // auto: "Auto",
      // static: "Static",
      // responsive: "Responsive"
    },
    imageFit: {
      // none: "None",
      // contain: "Contain",
      // cover: "Cover",
      // fill: "Fill"
    },
    contentMode: {
      // auto: "Auto",
      // image: "Image",
      // video: "Video",
      // youtube: "YouTube"
    },
    displayMode: {
      // auto: "Auto",
      // buttons: "Buttons",
      // dropdown: "Dropdown"
    }
  },
  // Operators
  op: {
    empty: "je prázdne",
    notempty: "nie je prázdne",
    equal: "rovná sa",
    notequal: "nerovná sa",
    contains: "obsahuje",
    notcontains: "neobsahuje",
    anyof: "ktorákoľvek",
    allof: "všetky",
    greater: "väčšie",
    less: "menšie",
    greaterorequal: "väčšie alebo rovné",
    lessorequal: "menšie alebo rovné",
    and: "a",
    or: "aleb"
  },
  // Embed window
  ew: {
    angular: "Použiť verziu Angular",
    jquery: "Použiť verziu jQuery",
    knockout: "Použiť verziu Knockout",
    react: "Použiť verziu React",
    vue: "Použiť verziu Vue",
    bootstrap: "Pre rámec bootstrap",
    modern: "Moderný motív",
    default: "Predvolený motív",
    orange: "Oranžový motív",
    darkblue: "Tmavomodrý motív",
    darkrose: "Motív Darkrose",
    stone: "Motív Stone",
    winter: "Motív Winter",
    winterstone: "Motív Winter-Stone",
    showOnPage: "Zobraziť prieskum na stránke",
    showInWindow: "Zobraziť prieskum v okne",
    loadFromServer: "Načítať JSON prieskumu zo servera",
    titleScript: "Skripty a štýly",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Vybrať stránku na testovanie:",
    showInvisibleElements: "Zobraziť neviditeľné prvky",
    // hideInvisibleElements: "Hide invisible elements"
  },
  validators: {
    answercountvalidator: "počet odpovedí",
    emailvalidator: "e-mail",
    expressionvalidator: "výraz",
    numericvalidator: "číslo",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "dokončiť prieskum",
    setvaluetrigger: "nastaviť hodnotu",
    copyvaluetrigger: "kopírovať hodnotu",
    skiptrigger: "prejsť na otázku",
    runexpressiontrigger: "spustiť výraz",
    visibletrigger: "zmeniť viditeľnosť (zastarané)"
  },
  pehelp: {
    // cookieName: "Cookies prevent users from filling out the same survey twice.",
    // format: "Use {0} as a placeholder for the actual value.",
    // totalText: "Visible only when at least one column has Total type or Total expression.",
    // acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
    // columnColCount: "Applicable only to Radiogroup and Checkbox cell types.",
    // autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information.",
    // valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property.",
    choicesbyurl: {
      // valueName: " "
    },
    // keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error."
  },
  // Properties
  p: {
    title: {
      name: "titul",
      title: "Nechajte prázdne, ak sa zhoduje s menom"
    },
    navigationButtonsVisibility: "Viditeľnosť navigačných tlačidiel",
    visibleIf: "Viditeľné ak",
    description: "opis",
    requiredIf: "Povinné ak",
    validators: "overovatelia",
    titleLocation: "Poloha titulu",
    choices: "možnosti",
    label: "štítok",
    currency: "mena",
    columns: "stĺpce",
    itemSize: "Veľkosť položky",
    templateTitle: "Titul šablóny",
    triggers: "aktivátory",
    defaultRowValue: "Predvolená hodnota riadka",
    multiSelect: "Výber viacerých možností",
    showLabel: "Zobraziť štítok",
    logoFit: "umiestnenie loga",
    pages: "stránky",
    calculatedValues: "vypočítané hodnoty",
    questionDescriptionLocation: "otázka – poloha opisu",
    progressBarType: "typ indikátora priebehu",
    questionTitlePattern: "otázka – vzor titulu",
    widthMode: "šírka režimu",
    navigationTitle: "Navigácia –​ titul",
    navigationDescription: "Navigácia – opis",
    useDisplayValuesInDynamicTexts: "Použiť zobrazené hodnoty v titule",
    descriptionLocation: "poloha opisu",
    defaultValueExpression: "predvolený výraz hodnoty",
    bindings: "väzby",
    allowAddRows: "povoliť pridávanie riadkov",
    allowRemoveRows: "povoliť odstránenie riadkov",
    detailPanelShowOnAdding: "panel s podrobnosťami – zobrazenie pri pridávaní",
    allowRowsDragAndDrop: "povoliť presúvanie riadkov",
    otherPlaceHolder: "iné – zástupný symbol",
    contentMode: "režim obsahu",
    imageFit: "umiestnenie obrázka",
    min: "min.",
    max: "max.",
    minValueExpression: "výraz minimálnej hodnoty",
    maxValueExpression: "výraz maximálnej hodnoty",
    step: "krok",
    dataList: "zoznam údajov",
    autoGrow: "automatické rozšírenie",
    multiLine: "viaceré riadky",
    height: "výška",
    penColor: "farba pera",
    backgroundColor: "farba pozadia",
    showCaption: "zobraziť titulok",
    iconName: "názov ikony",
    iconSize: "veľkosť ikony",
    // value: "Value",
    // attachOriginalItems: "attachOriginalItems",
    // renderAs: "renderAs",
    // cellHint: "cellHint",
    // isUnique: "isUnique",
    // showInMultipleColumns: "showInMultipleColumns",
    // totalMaximumFractionDigits: "totalMaximumFractionDigits",
    // totalMinimumFractionDigits: "totalMinimumFractionDigits",
    // detailElements: "detailElements",
    // allowAdaptiveActions: "allowAdaptiveActions",
    // questions: "questions",
    // surveyId: "surveyId",
    // surveyPostId: "surveyPostId",
    // surveyShowDataSaving: "surveyShowDataSaving",
    // showBrandInfo: "showBrandInfo",
    choicesByUrl: "Možnosti podľa URL",
    // otherPlaceholder: "otherPlaceholder",
    // choicesLazyLoadEnabled: "choicesLazyLoadEnabled",
    // choicesLazyLoadPageSize: "choicesLazyLoadPageSize",
    // inputFieldComponent: "inputFieldComponent",
    // itemComponent: "itemComponent",
    // elements: "elements",
    // content: "content",
    // closeOnSelect: "closeOnSelect",
    // longTap: "longTap",
    // acceptCarriageReturn: "acceptCarriageReturn",
    // displayMode: "displayMode",
    // altText: "altText",
    // templateElements: "templateElements",
    // operator: "operator",
    // isVariable: "isVariable",
    // runExpression: "runExpression"
  }
};

editorLocalization.locales["sk"] = skStrings;
