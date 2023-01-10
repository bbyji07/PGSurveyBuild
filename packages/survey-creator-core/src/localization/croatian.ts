// This dictionary contains 316 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.
import { editorLocalization, defaultStrings } from "survey-creator-core";

export var hrStrings = {
  // survey templates
  survey: {
    edit: "Uređivanje",
    externalHelpLink: "Gledajte i saznajte kako stvoriti ankete",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Molimo ispustite pitanje ovdje iz Toolbox.",
    addLogicItem: "Izradite pravilo za prilagodbu tijeka ankete.",
    copy: "Kopirati",
    duplicate: "Duplikata",
    addToToolbox: "Dodaj u Toolbox",
    deletePanel: "Brisanje ploče",
    deleteQuestion: "Izbriši pitanje",
    convertTo: "Pretvorite u",
    drag: "Povucite element"
  },
  // Question types
  qt: {
    default: "Zadani",
    checkbox: "Ček",
    comment: "Komentar",
    imagepicker: "Berač slika",
    // ranking: "Ranking",
    image: "Slike",
    dropdown: "Padajući",
    // tagbox: "Tag Box",
    file: "Datoteku",
    html: "Html",
    matrix: "Matrica (jedan izbor)",
    matrixdropdown: "Matrica (višestruki izbor)",
    matrixdynamic: "Matrica (dinamički redovi)",
    multipletext: "Više teksta",
    panel: "Ploča",
    paneldynamic: "Ploča (dinamički paneli)",
    radiogroup: "Radiogrupa",
    rating: "Ocjena",
    text: "Jedan ulaz",
    boolean: "Booleova",
    expression: "Izraz (samo za čitanje)",
    signaturepad: "Jastučić za potpis",
    // buttongroup: "Button Group",
    flowpanel: "Ploča protoka"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Zadani ({0})",
    survey: "Anketa",
    settings: "Postavke ankete",
    settingsTooltip: "Otvaranje postavki ankete",
    // surveySettings: "Survey Settings",
    // surveySettingsTooltip: "Open survey settings",
    showPanel: "Pokaži ploču",
    hidePanel: "Sakrij ploču",
    // prevSelected: "Select previous",
    // nextSelected: "Select next",
    // surveyTypeName: "Survey",
    // pageTypeName: "Page",
    // panelTypeName: "Panel",
    // questionTypeName: "Question",
    // columnTypeName: "Column",
    addNewPage: "Dodavanje nove stranice",
    moveRight: "Pomicanje udesno",
    moveLeft: "Pomicanje ulijevo",
    deletePage: "Brisanje stranice",
    editPage: "Uređivanje stranice",
    edit: "Uređivanje",
    newPageName: "stranica",
    newQuestionName: "pitanje",
    newPanelName: "ploča",
    newTextItemName: "tekst",
    testSurvey: "Ispitna anketa",
    // defaultV2Theme: "Default",
    // modernTheme: "Modern",
    // defaultTheme: "Default (legacy)",
    testSurveyAgain: "Ponovno probna anketa",
    testSurveyWidth: "Širina ankete: ",
    navigateToMsg: "Morao si navigirati do:",
    logic: "Logika ankete",
    embedSurvey: "Ugrađena anketa",
    translation: "Prijevod",
    saveSurvey: "Spremi anketu",
    saveSurveyTooltip: "Spremi anketu",
    designer: "Dizajner ankete",
    jsonEditor: "JSON urednik",
    // jsonHideErrors: "Hide errors",
    // jsonShowErrors: "Show errors",
    undo: "Poništiti",
    redo: "Ponoviti",
    undoTooltip: "Poništi posljednju promjenu",
    redoTooltip: "Preusmjeti promjenu",
    // showMoreChoices: "Show more",
    // showLessChoices: "Show less",
    copy: "Kopirati",
    cut: "Izrezati",
    paste: "Zalijepite",
    copyTooltip: "Kopiranje odabira u međuspremnik",
    cutTooltip: "Izrežite odabir na međuspremnik",
    pasteTooltip: "Pasta iz međuspremnika",
    options: "Mogućnosti",
    generateValidJSON: "Generiranje valjanog JSON",
    generateReadableJSON: "Generiranje čitljivog JSON",
    toolbox: "Alatni okvir",
    "property-grid": "Svojstva",
    // propertyGridFilteredTextPlaceholder: "Type to search...",
    toolboxGeneralCategory: "Općenito",
    // toolboxChoiceCategory: "Choice Questions",
    // toolboxTextCategory: "Text Input Questions",
    // toolboxContainersCategory: "Containers",
    // toolboxMatrixCategory: "Matrix Questions",
    // toolboxMiscCategory: "Misc",
    correctJSON: "Ispravite JSON.",
    surveyResults: "Rezultat ankete: ",
    surveyResultsTable: "Kao tablica",
    surveyResultsJson: "Kao JSON",
    resultsTitle: "Naslov pitanja",
    resultsName: "Naziv pitanja",
    resultsValue: "Vrijednost odgovora",
    resultsDisplayValue: "Vrijednost prikaza",
    modified: "Izmjena",
    saving: "Spremanje",
    saved: "Spremiti",
    propertyEditorError: "Pogreška:",
    saveError: "Pogreška! Sadržaj urednika nije spremljen.",
    // translationPropertyGridTitle: "Language Settings",
    // translationLanguages: "Languages",
    translationAddLanguage: "Odaberite jezik za prevođenje",
    translationShowAllStrings: "Pokažite sve žice",
    // translationShowUsedStringsOnly: "Used Strings Only",
    translationShowAllPages: "Pokažite sve stranice",
    translationNoStrings: "Nema žica za prevođenje. Promijenite filtar.",
    translationExportToSCVButton: "Izvoz u CSV",
    translationImportFromSCVButton: "Uvoz iz CSV",
    translationMergeLocaleWithDefault: "Spajanje {0} sa zadanim lokalomwith default locale.",
    // translationPlaceHolder: "Translation...",
    bold: "podebljano",
    italic: "kurziv",
    underline: "podcrtavanje",
    addNewQuestion: "Dodaj pitanje",
    selectPage: "Odaberite stranicu...",
    // htmlPlaceHolder: "HTML content will be here.",
    // panelPlaceHolder: "Drop a question from the toolbox here.",
    // surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below.",
    // addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    // chooseLogoPlaceholder: "[LOGO]",
    // auto: "auto",
    lg: {
      // addNewItem: "Add New Rule",
      // empty_tab: "Create a rule to customize the flow of the survey.",
      page_visibilityName: "Vidljivost stranice",
      // page_enableName: "Enable (disable) page",
      panel_visibilityName: "Vidljivost panela",
      panel_enableName: "Omogući/onemogući panel",
      question_visibilityName: "Vidljivost pitanja",
      question_enableName: "Pitanje omogućuje/onesposobljava",
      question_requireName: "Pitanje nije obavezno",
      // column_visibilityName: "Show (hide) column",
      // column_enableName: "Enable (disable) column",
      // column_requireName: "Make column required",
      trigger_completeName: "Potpuna anketa",
      trigger_setvalueName: "Postavite vrijednost pitanja",
      trigger_copyvalueName: "Kopiranje vrijednosti pitanja",
      trigger_skipName: "Prijeđite na pitanje",
      trigger_runExpressionName: "Pokretanje prilagođenog izraza",
      completedHtmlOnConditionName: "Prilagođeni 'Thank you page' tekst",
      page_visibilityDescription: "Učinite stranicu vidljivom kada se logička ekspresija vrati istinitom. Inače neka bude nevidljivo.",
      panel_visibilityDescription: "Učinite ploču vidljivom kada se logička ekspresija vrati istinitom. Inače ga držati nevidljivim.",
      panel_enableDescription: "Učinite ploču i sve elemente unutar nje omogućite kada se logička ekspresija vrati istinita. Inače ih držite onesposobljenima.",
      question_visibilityDescription: "Učinite pitanje vidljivim kada se logička ekspresija vrati istinita. Inače ga držati nevidljivim.",
      question_enableDescription: "Omogućite pitanje kada se logička ekspresija vrati istinita. Inače ga držati onemogućen.",
      question_requireDescription: "Pitanje postaje potrebno kada se logička ekspresija vrati istinita.",
      trigger_completeDescription: "Kada se logička ekspresija vrati istinita, anketa postaje dovršena i krajnji korisnik vidi 'Thank you page'.",
      trigger_setvalueDescription: "Kada se vrijednosti pitanja, koje se koriste u logičkom izrazu, mijenjaju i logička ekspresija se vraća istinita, tada se vrijednost postavlja na odabrano pitanje.",
      trigger_copyvalueDescription: "Kada se vrijednosti pitanja, koje se koriste u logičkoj ekspresiji, mijenjaju i logička ekspresija se vraća istinita, tada se vrijednost jednog odabranog pitanja kopira na drugo odabrano pitanje.",
      trigger_skipDescription: "Kada se logička ekspresija vrati istinita, anketa preskače na / fokusira odabrano pitanje.",
      trigger_runExpressionDescription: "Kada se logička ekspresija vrati istinita, tada se izvodi prilagođeni izraz. Taj rezultat izraza možete neobavezno postaviti u odabrano pitanje.",
      completedHtmlOnConditionDescription: "Ako se logička ekspresija vrati istinita, zadani tekst za 'Thank you page' mijenja se u zadani.",
      itemExpressionText: "Kada se izraz '{0}' vrati istinit", //{0} - the expression
      // itemEmptyExpressionText: "New rule",
      page_visibilityText: "Učinite stranicu {0} vidljivom", //{0} page name
      panel_visibilityText: "Učinite ploču {0} vidljivom", //{0} panel name
      panel_enableText: "Omogući panel x {0}", //{0} panel name
      question_visibilityText: "Učinite pitanje {0} vidljivim", //{0} question name
      question_enableText: "Omogući pitanje {0}", //{0} question name
      question_requireText: "Neka pitanje {0} bude potrebno", //{0} question name
      // column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
      // column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
      // column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
      trigger_completeText: "Anketa se dovrša",
      trigger_setvalueText: "Postavljeno u pitanje: {0} vrijednost {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Kopirajte u pitanje: {0} vrijednost od pitanja {1}", //{0} and {1} question names
      trigger_skipText: "Anketa preskače na pitanje {0}", //{0} question name
      trigger_runExpressionText1: "Pokretanje izraza: '{0}'", //{0} the expression
      trigger_runExpressionText2: " i dovela u pitanje svoj rezultat: {0}", //{0} question name
      completedHtmlOnConditionText: "Prikazati prilagođeni tekst za 'Thank you page'.",
      // showAllQuestions: "All Questions",
      // showAllActionTypes: "All Action Types",
      conditions: "Stanje/Stanja",
      actions: "Akcije",
      expressionEditorTitle: "Definiranje uvjeta",
      actionsEditorTitle: "Definiranje radnji",
      deleteAction: "Brisanje radnje",
      addNewAction: "Dodavanje nove akcije",
      selectedActionCaption: "Odaberite radnju za dodavanje...",
      expressionInvalid: "Logička ekspresija je prazna ili nevažeća. Molim vas, ispravite to.",
      noActionError: "Molim vas, dodajte barem jednu akciju.",
      actionInvalid: "Molimo vas da riješite probleme u svojoj akciji.",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "Primijeniti",
    ok: "OK",
    save: "Spremiti",
    // clear: "Clear",
    saveTooltip: "Spremiti",
    cancel: "Otkazati",
    // set: "Set",
    reset: "Resetirati",
    // change: "Change",
    refresh: "Osvježi",
    // close: "Close",
    delete: "Izbrisati",
    add: "Dodati",
    addNew: "Dodaj novo",
    addItem: "Kliknite da biste dodali stavku...",
    // removeItem: "Click to remove the item...",
    // dragItem: "Drag the item",
    addOther: "Drugih",
    addSelectAll: "Odaberite sve",
    addNone: "Nitko",
    removeAll: "Uklonite sve",
    edit: "Uređivanje",
    back: "Povratak bez uštede",
    backTooltip: "Povratak bez uštede",
    saveAndBack: "Spremanje i vraćanje",
    saveAndBackTooltip: "Spremanje i vraćanje",
    // doneEditing: "Done",
    editChoices: "Uređivanje izbora",
    showChoices: "Pokažite izbore",
    move: "Premjestiti",
    empty: "<empty>",
    // emptyValue: "Value is empty",
    fastEntry: "Brzi unos",
    // fastEntryNonUniqueError: "Value '{0}' is not unique",
    // fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    // fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
    formEntry: "Unos obrasca",
    testService: "Testirajte uslugu",
    itemSelectorEmpty: "Odaberite element",
    conditionActionEmpty: "Odaberite radnju",
    conditionSelectQuestion: "Odaberite pitanje...",
    conditionSelectPage: "Odaberite stranicu...",
    conditionSelectPanel: "Odabir ploče...",
    conditionValueQuestionTitle: "Unesite/odaberite vrijednost",
    expressionHelp: "Možete koristiti kovrčave nosače kako biste dobili pristup vrijednostima pitanja: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). Funkcije možete koristiti kao: iif(), today(), age(), min(), max(), count(), avg() and others.",
    aceEditorHelp: "Pritisnite ctrl + prostor kako biste dobili savjet o završetku ekspresije",
    aceEditorRowTitle: "Trenutni redk",
    aceEditorPanelTitle: "Trenutna ploča",
    showMore: "Više detalja potražite u dokumentaciji",
    assistantTitle: "Dostupna pitanja:",
    cellsEmptyRowsColumns: "Trebao bi postojati barem jedan stupac ili red",
    // showPreviewBeforeComplete: "Preview answers before submitting the survey",
    propertyIsEmpty: "Unesite vrijednost",
    propertyIsNoUnique: "Unesite jedinstvenu vrijednost",
    propertyNameIsNotUnique: "Unesite jedinstveno ime",
    listIsEmpty: "Dodavanje nove stavke",
    // "listIsEmpty@choices": "No choices have been added yet",
    // "addNew@choices": "Add a choice",
    expressionIsEmpty: "Izraz je prazan",
    value: "Vrijednost",
    text: "tekst",
    rowid: "ID redaka",
    imageLink: "Veza slike",
    columnEdit: "Uređivanje stupca: {0}",
    itemEdit: "Uređivanje stavke: {0}",
    url: "Url",
    path: "Put",
    valueName: "Naziv vrijednosti",
    choicesbyurl: {
      // valueName: "Get values from the following JSON field"
    },
    titleName: "Naziv naslova",
    // imageLinkName: "Get image URLs from the following JSON field",
    // allowEmptyResponse: "Allow empty response",
    titlePlaceholder: "Ulazni naslov ovdje",
    surveyTitlePlaceholder: "Naslov ulazne ankete ovdje",
    pageTitlePlaceholder: "Naslov ulazne stranice ovdje",
    descriptionPlaceholder: "Unesite opis",
    surveyDescriptionPlaceholder: "Unesite opis ankete",
    pageDescriptionPlaceholder: "Unesite opis stranice",
    showOtherItem: "Ima i drugu stavku",
    otherText: "Tekst druge stavke",
    showNoneItem: "Nema stavku",
    noneText: "Nijedan tekst stavke",
    showSelectAllItem: "Sadrži odaberite sve stavke",
    selectAllText: "Odaberite sve stavke tekst",
    choicesMin: "Minimalna vrijednost za automatski generirane stavke",
    choicesMax: "Maksimalna vrijednost za automatski generirane stavke",
    choicesStep: "Razlika između automatski generiranih stavki",
    name: "Ime",
    title: "Naslov",
    cellType: "Vrsta ćelije",
    colCount: "Broj stupaca",
    choicesOrder: "Odaberite redoslijed izbora",
    visible: "Je li vidljivo?",
    isRequired: "Je potrebno?",
    isAllRowRequired: "Zahtijevati odgovor za sve redove",
    requiredErrorText: "Potreban tekst pogreške",
    startWithNewLine: "Počinje li s novom linijom?",
    rows: "Broj redaka",
    cols: "Broj stupaca",
    placeholder: "Držač ulaznog mjesta",
    showPreview: "Prikaz područja pretpregleda",
    storeDataAsText: "Pohranite sadržaj datoteke u rezultat JSON kao tekst",
    maxSize: "Maksimalna veličina datoteke u bytes",
    imageHeight: "Visina slike",
    imageWidth: "Širina slike",
    rowCount: "Broj redaka",
    columnLayout: "Raspored stupaca",
    addRowLocation: "Dodavanje lokacije gumba redaka",
    addRowText: "Dodavanje teksta gumba redak",
    removeRowText: "Uklanjanje teksta gumba redaka",
    rateMin: "Minimalna stopa",
    rateMax: "Maksimalna stopa",
    rateStep: "Korak stope",
    minRateDescription: "Opis minimalne stope",
    maxRateDescription: "Opis maksimalne stope",
    inputType: "Vrsta unosa",
    optionsCaption: "Opis opcija",
    defaultValue: "Zadana vrijednost",
    cellsDefaultRow: "Zadani tekstovi ćelija",
    surveyEditorTitle: "Uređivanje postavki ankete",
    qEditorTitle: "Uređivanje: {0}",
    maxLength: "Maksimalna duljina",
    buildExpression: "Graditi",
    editExpression: "Uređivanje",
    and: "I",
    or: "Ili",
    remove: "Ukloniti",
    addCondition: "Dodavanje stanja",
    // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
    // if: "If",
    // then: "then",
    // setToName: "Target question",
    // fromName: "Question to copy answer from",
    // gotoName: "Question to skip to",
    // ruleIsNotSet: "Rule is incorrect",
    // includeIntoResult: "Include into survey results",
    showTitle: "Pokaži/sakrij naslov",
    expandCollapseTitle: "Naslov proširenja/kolapsa",
    locale: "Zadani jezik",
    simulator: "Odaberite uređaj",
    landscapeOrientation: "Krajolik",
    // portraitOrientation: "Switch to portrait orientation",
    mode: "Način rada (samo uređivanje/čitanje)",
    clearInvisibleValues: "Jasne nevidljive vrijednosti",
    cookieName: "Naziv kolačića (onemogućiti anketu dva puta lokalno)",
    sendResultOnPageNext: "Pošaljite rezultate ankete na sljedeću stranicu",
    storeOthersAsComment: "Pohranite vrijednost 'others' u zasebnom polju",
    showPageTitles: "Prikazate naslove stranica",
    showPageNumbers: "Prikazate brojeve stranica",
    pagePrevText: "Tekst prethodnog gumba stranice",
    pageNextText: "Tekst sljedećeg gumba stranice",
    completeText: "Complete button text",
    previewText: "Tekst gumba za pretpregled",
    editText: "Uređivanje teksta gumba",
    startSurveyText: "Tekst gumba za pokretanje",
    showNavigationButtons: "Prikakanje navigacijskih tipki (zadana navigacija)",
    showPrevButton: "Prikagnite prethodni gumb (korisnik se može vratiti na prethodnu stranicu)",
    firstPageIsStarted: "Prva stranica u anketi je početna stranica.",
    showCompletedPage: "Prikagušite dovršenu stranicu na kraju (completedHtml)",
    goNextPageAutomatic: "Kada odgovarate na sva pitanja, idite automatski na sljedeću stranicu",
    showProgressBar: "Pokaži traku napretka",
    questionTitleLocation: "Lokacija naslova pitanja",
    requiredText: "Pitanje je zahtijevalo simbole",
    questionStartIndex: "Indeks pokretanja pitanja (1, 2 ili 'A', 'a')",
    showQuestionNumbers: "Prikazate brojeve pitanja",
    questionTitleTemplate: "Predložak naslova pitanja, zadano je: '{no}. {require} {title}'",
    questionErrorLocation: "Mjesto pogreške u pitanju",
    focusFirstQuestionAutomatic: "Usredotočite prvo pitanje na promjenu stranice",
    questionsOrder: "Redoslijed elemenata na stranici",
    maxTimeToFinish: "Maksimalno vrijeme za dovršaje ankete",
    maxTimeToFinishPage: "Maksimalno vrijeme za dovršanje stranice u anketi",
    page: {
      // maxTimeToFinish: "Time limit to finish the page (in seconds)"
    },
    question: {
      // page: "Parent page"
    },
    showTimerPanel: "Pokaži ploču timera",
    showTimerPanelMode: "Prikazate način rada timer panela",
    renderMode: "Način prikaza",
    allowAddPanel: "Dopustite dodavanje ploče",
    allowRemovePanel: "Dopustite uklanjanje ploče",
    // noEntriesText: "Empty entries text",
    panelAddText: "Dodavanje teksta panela",
    panelRemoveText: "Removing panel text",
    isSinglePage: "Uklanjanje teksta ploče",
    html: "Html",
    expression: "Izraz",
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
    minValue: "Minimalna vrijednost",
    maxValue: "Maksimalna vrijednost",
    minLength: "Minimalna duljina",
    allowDigits: "Dopustite znamenke",
    minCount: "Minimalno brojanje",
    maxCount: "Maksimalni broj",
    regex: "Redoviti izraz",
    surveyvalidator: {
      // text: "Error message",
      // expression: "Validation expression"
    },
    totalText: "Ukupan tekst",
    totalType: "Ukupna vrsta",
    totalExpression: "Ukupni izraz",
    totalDisplayStyle: "Ukupan stil prikaza",
    totalCurrency: "Ukupna valuta",
    totalFormat: "Ukupan format",
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
    // allowClear: "Show the Clear button",
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
    logoPosition: "Položaj logotipa",
    addLogo: "Dodavanje logotipa...",
    changeLogo: "Promjena logotipa...",
    logoPositions: {
      none: "Uklanjanje logotipa",
      left: "Lijevo",
      right: "Desno",
      top: "Na vrhu",
      bottom: "Na dnu"
    },
    tabs: {
      general: "Općenito",
      fileOptions: "Mogućnosti",
      html: "Html Editor",
      columns: "Stupce",
      rows: "Redaka",
      choices: "Izbora",
      items: "Stavke",
      visibleIf: "Vidljivo ako",
      enableIf: "Omogući ako",
      requiredIf: "Potrebno ako",
      rateValues: "Vrijednosti cijena",
      choicesByUrl: "Izbori s weba",
      matrixChoices: "Zadani izbori",
      multipleTextItems: "Unosi teksta",
      numbering: "Numeriranje",
      validators: "Validatori",
      navigation: "Navigacija",
      question: "Pitanje",
      pages: "Stranice",
      timer: "Timer/Kviz",
      calculatedValues: "Izračunate vrijednosti",
      triggers: "Aktivira",
      templateTitle: "Naslov predloška",
      totals: "Zbrojeve",
      logic: "Logika",
      layout: "Izgled",
      data: "Podataka",
      validation: "Provjera valjanosti",
      cells: "Ćelije",
      showOnCompleted: "Prikazuje se na dovršenom",
      logo: "Logotip u naslovu ankete",
      slider: "Klizač",
      // expression: "Expression",
      others: "Drugi"
    },
    editProperty: "Uređivanje objekta '{0}'",
    items: "[ Stavke: {0} ]",
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
    enterNewValue: "Unesite vrijednost.",
    noquestions: "U anketi nema nikakvog pitanja.",
    createtrigger: "Izradite okidač",
    titleKeyboardAdornerTip: "Pritisnite gumb za unos za uređivanje",
    keyboardAdornerTip: "Pritisnite gumb enter za uređivanje stavke, pritisnite gumb za brisanje stavke, pritisnite alt plus strelica prema gore ili strelica prema dolje za pomicanje stavke.",
    triggerOn: "Na ",
    triggerMakePagesVisible: "Učinite stranice vidljivima:",
    triggerMakeQuestionsVisible: "Učinite elemente vidljivima:",
    triggerCompleteText: "Dovršite anketu ako uspijete.",
    triggerNotSet: "Okidač nije postavljen",
    triggerRunIf: "Trčanje ako",
    triggerSetToName: "Promjena vrijednosti: ",
    triggerFromName: "Vrijednost kopiranja iz: ",
    triggerRunExpression: "Postisni ovaj izraz:",
    triggerSetValue: "za: ",
    triggerGotoName: "Idi na pitanje:",
    triggerIsVariable: "Ne stavljajte varijablu u rezultat ankete.",
    triggerRunExpressionEmpty: "Unesite valjani izraz",
    // emptyExpressionPlaceHolder: "Type expression here...",
    noFile: "Nema odabira datoteke",
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
    true: "istina",
    false: "lažne",
    inherit: "naslijediti",
    show: "pokazati",
    hide: "sakrij",
    default: "zadani",
    initial: "početni",
    random: "slučajan",
    collapsed: "srušio",
    expanded: "proširio",
    none: "nitko",
    asc: "uzlazno",
    desc: "silazno",
    indeterminate: "neodređeno",
    decimal: "decimalna",
    currency: "valute",
    percent: "posto",
    firstExpanded: "firstExpanded",
    off: "isključeno",
    // onpanel: "Start on each panel",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "popis",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "oba",
    left: "lijevo",
    // right: "Right",
    color: "boja",
    date: "datum",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    // onHiddenContainer: "When the question or its panel/page becomes hidden",
    clearInvisibleValues: {
      // none: "Never"
    },
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    // onValueChanging: "Before an answer is changed",
    standard: "standard",
    singlePage: "single page",
    questionPerPage: "question per page",
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
    // pages: "Completed pages",
    // questions: "Answered questions",
    // requiredQuestions: "Answered required questions",
    // correctQuestions: "Valid answers",
    // buttons: "Completed pages (button UI)",
    // underInput: "Under the input",
    // underTitle: "Under the title",
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
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    anyof: "any of",
    allof: "all of",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals",
    and: "and",
    or: "or"
  },
  // Embed window
  ew: {
    angular: "Koristite kutnu verziju",
    jquery: "Koristite jQuery verziju",
    knockout: "Korištenje nokaut verzije",
    react: "Korištenje verzije React",
    vue: "Koristite Vue verziju",
    bootstrap: "Za bootstrap okvir",
    modern: "Moderna tema",
    default: "Zadana tema",
    orange: "Narančasta tema",
    darkblue: "Darkblue tema",
    darkrose: "Darkrose tema",
    stone: "Kamena tema",
    winter: "Zimska tema",
    winterstone: "Tema Zimsko-kamen",
    showOnPage: "Pokažite anketu na stranici",
    showInWindow: "Pokažite anketu u prozoru",
    loadFromServer: "Učitavanje Survey JSON s poslužitelja",
    titleScript: "Skripte i stilovi",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Odaberite stranicu da biste je testirali:",
    showInvisibleElements: "Pokaži nevidljive elemente",
    // hideInvisibleElements: "Hide invisible elements"
  },
  validators: {
    answercountvalidator: "broj odgovora",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "potpuna anketa",
    setvaluetrigger: "postavljena vrijednost",
    copyvaluetrigger: "vrijednost kopiranja",
    skiptrigger: "preskočiti na pitanje",
    runexpressiontrigger: "pokrenuti izraz",
    visibletrigger: "promjena vidljivosti (amortizirati)"
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
      name: "title",
      title: "Ostavite prazno, ako je isto kao 'Name'"
    },
    navigationButtonsVisibility: "navigationButtonsVisibility",
    visibleIf: "visibleIf",
    description: "description",
    requiredIf: "requiredIf",
    validators: "validators",
    titleLocation: "titleLocation",
    choices: "choices",
    label: "label",
    currency: "currency",
    columns: "columns",
    itemSize: "itemSize",
    templateTitle: "templateTitle",
    triggers: "triggers",
    defaultRowValue: "defaultRowValue",
    // multiSelect: "Allow multiple selection",
    // showLabel: "Show image captions",
    // logoFit: "logoFit",
    // pages: "pages",
    // calculatedValues: "calculatedValues",
    // questionDescriptionLocation: "questionDescriptionLocation",
    // progressBarType: "progressBarType",
    // questionTitlePattern: "questionTitlePattern",
    // widthMode: "widthMode",
    // navigationTitle: "navigationTitle",
    // navigationDescription: "navigationDescription",
    // useDisplayValuesInDynamicTexts: "useDisplayValuesInDynamicTexts",
    // descriptionLocation: "descriptionLocation",
    // defaultValueExpression: "defaultValueExpression",
    // bindings: "bindings",
    // allowAddRows: "allowAddRows",
    // allowRemoveRows: "allowRemoveRows",
    // detailPanelShowOnAdding: "detailPanelShowOnAdding",
    // allowRowsDragAndDrop: "allowRowsDragAndDrop",
    // otherPlaceHolder: "otherPlaceHolder",
    // contentMode: "contentMode",
    // imageFit: "imageFit",
    // min: "min",
    // max: "max",
    // minValueExpression: "minValueExpression",
    // maxValueExpression: "maxValueExpression",
    // step: "step",
    // dataList: "dataList",
    // autoGrow: "autoGrow",
    // multiLine: "multiLine",
    // height: "height",
    // penColor: "penColor",
    // backgroundColor: "backgroundColor",
    // showCaption: "showCaption",
    // iconName: "iconName",
    // iconSize: "iconSize",
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
    choicesByUrl: "choicesByUrl",
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
editorLocalization.locales["hr"] = hrStrings;
