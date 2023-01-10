// This dictionary contains 325 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.
import { editorLocalization, defaultStrings } from "survey-creator-core";

export var nbStrings = {
  // survey templates
  survey: {
    edit: "Rediger",
    externalHelpLink: "Se og lær hvordan å opprette nye skjema",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Dra og slipp et spørsmål her fra Verktøylisten til venstre.",
    addLogicItem: "Opprett en regel for å skreddersy skjemaflyten",
    copy: "Kopier",
    // duplicate: "Duplicate",
    addToToolbox: "Legg til verktøylisten",
    deletePanel: "Slett panel",
    deleteQuestion: "Slett spørsmål",
    convertTo: "Konverter til",
    drag: "Dra element"
  },
  // Question types
  qt: {
    default: "Standard",
    checkbox: "Sjekkboks",
    comment: "Kommentar",
    imagepicker: "Bildevelger",
    // ranking: "Ranking",
    image: "Bilde",
    dropdown: "Nedtrekksliste",
    // tagbox: "Tag Box",
    file: "Fil",
    html: "Html",
    matrix: "Matrise (enkelvalg)",
    matrixdropdown: "Matrise (flervalg)",
    matrixdynamic: "Matrise (dynamiske rader)",
    multipletext: "Flerlinjetekst",
    panel: "Panel",
    paneldynamic: "Panel (dynamiske paneler)",
    radiogroup: "Radiogruppe",
    rating: "Rangering",
    text: "Enkel tekst",
    boolean: "Boolean",
    expression: "Formel",
    signaturepad: "Signatur",
    // buttongroup: "Button Group",
    flowpanel: "Flytpanel"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Skjema",
    settings: "Skjemainnstillinger",
    settingsTooltip: "Åpne skjemainnstillinger",
    // surveySettings: "Survey Settings",
    // surveySettingsTooltip: "Open survey settings",
    showPanel: "Vis panel",
    hidePanel: "Skjul panel",
    // prevSelected: "Select previous",
    // nextSelected: "Select next",
    // surveyTypeName: "Survey",
    // pageTypeName: "Page",
    // panelTypeName: "Panel",
    // questionTypeName: "Question",
    // columnTypeName: "Column",
    addNewPage: "Legg til ny side",
    moveRight: "Bla til høyre",
    moveLeft: "Bla til venstre",
    deletePage: "Slett side",
    editPage: "Rediger side",
    edit: "Rediger",
    newPageName: "side",
    newQuestionName: "spørsmål",
    newPanelName: "panel",
    newTextItemName: "tekst",
    testSurvey: "Test skjema",
    // defaultV2Theme: "Default",
    // modernTheme: "Modern",
    // defaultTheme: "Default (legacy)",
    testSurveyAgain: "Test skjema igjen",
    testSurveyWidth: "Skjemabredde: ",
    navigateToMsg: "Du måtte navigere til:",
    logic: "Skjemalogikk",
    embedSurvey: "Integrer skjema",
    translation: "Oversettelse",
    saveSurvey: "Lagre skjema",
    saveSurveyTooltip: "Lagre skjema",
    designer: "Skjemadesigner",
    jsonEditor: "JSON-redigering",
    // jsonHideErrors: "Hide errors",
    // jsonShowErrors: "Show errors",
    undo: "Angre",
    redo: "Gjenta",
    undoTooltip: "Angre siste endring",
    redoTooltip: "Gjør om siste endring",
    // showMoreChoices: "Show more",
    // showLessChoices: "Show less",
    copy: "Kopier",
    cut: "Kutt",
    paste: "Lim innn",
    copyTooltip: "Kopier valgt seksjon inn i utklippstavla",
    cutTooltip: "Kutt valgt seksjon inn i utklippstavla",
    pasteTooltip: "Lim inn fra utklippstavla",
    options: "Alternativer",
    generateValidJSON: "Lag gyldig JSON",
    generateReadableJSON: "Lag lesbar JSON",
    toolbox: "Verktøyliste",
    "property-grid": "Innstillinger",
    // propertyGridFilteredTextPlaceholder: "Type to search...",
    toolboxGeneralCategory: "Generelt",
    // toolboxChoiceCategory: "Choice Questions",
    // toolboxTextCategory: "Text Input Questions",
    // toolboxContainersCategory: "Containers",
    // toolboxMatrixCategory: "Matrix Questions",
    // toolboxMiscCategory: "Misc",
    correctJSON: "Vennligst korriger JSON.",
    surveyResults: "Skjemaresultat: ",
    surveyResultsTable: "Som tabell",
    surveyResultsJson: "Som JSON",
    resultsTitle: "Spørsmålstittel",
    resultsName: "Spørsmålsnavn",
    resultsValue: "Svar",
    resultsDisplayValue: "Vist verdi",
    modified: "Endret",
    saving: "Lagrer",
    saved: "Lagret",
    propertyEditorError: "Feil:",
    saveError: "Feil! Skjema innhold er ikke lagret.",
    // translationPropertyGridTitle: "Language Settings",
    // translationLanguages: "Languages",
    translationAddLanguage: "Velg språk for oversetting",
    translationShowAllStrings: "Vis alle strenger",
    // translationShowUsedStringsOnly: "Used Strings Only",
    translationShowAllPages: "Vis alle sider",
    translationNoStrings: "Ingen strenger å oversette. Vennligst endre filteret.",
    translationExportToSCVButton: "Eksporter til CSV",
    translationImportFromSCVButton: "Importer fra CSV",
    translationMergeLocaleWithDefault: "Flett {0} med standard språk",
    // translationPlaceHolder: "Translation...",
    bold: "Fet",
    italic: "Kursiv",
    underline: "Underlinjet",
    addNewQuestion: "Legg til spørsmål",
    selectPage: "Velg side...",
    // htmlPlaceHolder: "HTML content will be here.",
    // panelPlaceHolder: "Drop a question from the toolbox here.",
    // surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below.",
    // addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    // chooseLogoPlaceholder: "[LOGO]",
    // auto: "auto",
    lg: {
      addNewItem: "Legg til ny regel",
      // empty_tab: "Create a rule to customize the flow of the survey.",
      page_visibilityName: "Sidesynlighet",
      // page_enableName: "Enable (disable) page",
      panel_visibilityName: "Panelsynlighet",
      panel_enableName: "Panel aktivere/deaktivere",
      question_visibilityName: "Spørsmålssynlghet",
      question_enableName: "Spørsmål aktivere/deaktivere",
      question_requireName: "Spørsmål valgfritt/påkrevd",
      // column_visibilityName: "Show (hide) column",
      // column_enableName: "Enable (disable) column",
      // column_requireName: "Make column required",
      trigger_completeName: "Fullfør skjema",
      trigger_setvalueName: "Angi spørsmålsnavn",
      trigger_copyvalueName: "Kopier spørsmålsverdi",
      trigger_skipName: "Hopp til spørsmål",
      trigger_runExpressionName: "Kjør tilpasset formel",
      completedHtmlOnConditionName: "Tilpasset 'Takk-side' tekst",
      page_visibilityDescription: "Gjør siden synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      panel_visibilityDescription: "Gjør panelet synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      panel_enableDescription: "Aktiverer panelet, og alle elementer inni, når formelen evalueres til 'sann'. I andre tilfeller holdes de deaktivert.",
      question_visibilityDescription: "Gjør spørsmålet synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      question_enableDescription: "Aktiverer spørsmålet når formelen evalueres til 'sann', og holder den ellers deaktivert.",
      question_requireDescription: "Spørmsålet blir påkrevd når formelen evalueres til 'sann'.",
      trigger_completeDescription: "Når formelen evalueres til 'sann' fullføres skjemaet og sluttbrukeren ser 'Takk-siden'.",
      trigger_setvalueDescription: "Når spørsmålsverdier som er brukt i formelen endres, og formelen evalueres som 'sann', vil verdien settes i det valgte spørsmålet.",
      trigger_copyvalueDescription: "Når spørsmålsverdier som er brukt i formelen endres, og formelen evalueres som 'sann', vil verdien i et valgt spørsmål kopieres til et annet valgt spørsmål.",
      trigger_skipDescription: "Når formelen evalueres til 'sann' vil skjemaet hoppe til/fokusere på valgt spørsmål.",
      trigger_runExpressionDescription: "Når formelen evauleres til 'sann' vil den tilpassede formelen utføres. Du kan valgfritt sette formelens resultat inn i det valgte spørsmålet.",
      completedHtmlOnConditionDescription: "Hvis formelen evalueres til 'sann' vil standardteksten på 'Takk siden' endres til den gitte teksten.",
      itemExpressionText: "Når formelen: '{0}' evalueres til 'sann':", //{0} - the expression
      // itemEmptyExpressionText: "New rule",
      page_visibilityText: "Gjøre side {0} synlig", //{0} page name
      panel_visibilityText: "Gjør panel {0} synlig", //{0} panel name
      panel_enableText: "Gjør panel {0} aktivert", //{0} panel name
      question_visibilityText: "Gjør spørsmål {0} synlig", //{0} question name
      question_enableText: "Gjør spørsmål {0} aktivert", //{0} question name
      question_requireText: "Gjør spørsmål {0} påkrevd", //{0} question name
      // column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
      // column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
      // column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
      trigger_completeText: "Skjemaet blir fullført",
      trigger_setvalueText: "Sett inn: {0} verdi {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Kopier inn: {0} verdi fra spørsmål {1}", //{0} and {1} question names
      trigger_skipText: "Hopp til spørsmål {0}", //{0} question name
      trigger_runExpressionText1: "Kjør formel: '{0}'", //{0} the expression
      trigger_runExpressionText2: " og sett inn resultatet i spørsmål: {0}", //{0} question name
      completedHtmlOnConditionText: "Vis tilpasset tekst for 'Takk-siden'.",
      // showAllQuestions: "All Questions",
      // showAllActionTypes: "All Action Types",
      conditions: "Vilkår",
      actions: "Handling(er)",
      expressionEditorTitle: "Definer vilkår",
      actionsEditorTitle: "Definer handling(er)",
      deleteAction: "Slett handling",
      addNewAction: "Legg til handling",
      selectedActionCaption: "Velg handling som skal legges til...",
      expressionInvalid: "Formelen er tom eller ugyldig. Vennligst korriger den.",
      noActionError: "Vennligst legg til minst en handling",
      actionInvalid: "Vennligst korriger problemer med handlingen.",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "Bruk",
    ok: "OK",
    save: "Lagre",
    // clear: "Clear",
    saveTooltip: "Lagre",
    cancel: "Avbryt",
    // set: "Set",
    reset: "Tilbakestill",
    // change: "Change",
    refresh: "Last inn på nytt",
    // close: "Close",
    delete: "Slett",
    add: "Legg til",
    addNew: "Legg til ny",
    addItem: "Klikk for å legge til...",
    // removeItem: "Click to remove the item...",
    // dragItem: "Drag the item",
    addOther: "Annet",
    addSelectAll: "Velg alt",
    addNone: "Ingen",
    removeAll: "Fjern alt",
    edit: "Rediger",
    back: "Gå tilbake uten å lagre",
    backTooltip: "Gå tilbake uten å lagre",
    saveAndBack: "Lagre og gå tilbake",
    saveAndBackTooltip: "Lagre og gå tilbake",
    // doneEditing: "Done",
    editChoices: "Rediger valg",
    showChoices: "Vis valg",
    move: "Flytt",
    empty: "<tom>",
    // emptyValue: "Value is empty",
    fastEntry: "Rask innfylling",
    // fastEntryNonUniqueError: "Value '{0}' is not unique",
    // fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    // fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
    formEntry: "Innfylling i skjema",
    testService: "Sjekk tjenesten",
    itemSelectorEmpty: "Vennligst velg elementet",
    conditionActionEmpty: "Velg handlingen",
    conditionSelectQuestion: "Velg spørsmål...",
    conditionSelectPage: "Velg side...",
    conditionSelectPanel: "Velg panel...",
    conditionValueQuestionTitle: "Vennligst skriv inn/velg verdi",
    expressionHelp: "Vennligst skriv inn en formel. Du kan bruke klammeparenteser for å få tilgang til spørsmålsverdiene: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Trykk ctrl+mellomrom for å få hint til å fullføre formler",
    aceEditorRowTitle: "Gjeldende rad",
    aceEditorPanelTitle: "Gjeldende panel",
    showMore: "For mer detaljer - se dokumentasjonen",
    assistantTitle: "Tilgjengelige spørsmål:",
    cellsEmptyRowsColumns: "Det må være minst 1 kolonne eller rad",
    // showPreviewBeforeComplete: "Preview answers before submitting the survey",
    propertyIsEmpty: "Vennligst fyll inn en verdi",
    // propertyIsNoUnique: "Please enter a unique value",
    propertyNameIsNotUnique: "Vennligst fyll inn et unikt navn",
    listIsEmpty: "Legg til nytt element",
    // "listIsEmpty@choices": "No choices have been added yet",
    // "addNew@choices": "Add a choice",
    expressionIsEmpty: "Formelen er tom",
    value: "Verdi",
    text: "Tekst",
    rowid: "Rad-ID",
    imageLink: "Bildelenke",
    columnEdit: "Rediger kolonne: {0}",
    itemEdit: "Rediger element: {0}",
    url: "URL",
    path: "Sti",
    valueName: "Verdinavn",
    choicesbyurl: {
      // valueName: "Get values from the following JSON field"
    },
    titleName: "Tittelnavn",
    // imageLinkName: "Get image URLs from the following JSON field",
    // allowEmptyResponse: "Allow empty response",
    titlePlaceholder: "Skriv tittel her",
    surveyTitlePlaceholder: "Skriv skjematittel her",
    pageTitlePlaceholder: "Skriv sidetittel her",
    descriptionPlaceholder: "Skriv beskrivelse",
    surveyDescriptionPlaceholder: "Skriv skjema-beskrivelse",
    pageDescriptionPlaceholder: "Skriv side-beskrivelse",
    showOtherItem: "Har annet element",
    otherText: "Annet element-tekst",
    showNoneItem: "Har velg ingen",
    noneText: "Velg ingen-tekst",
    showSelectAllItem: "Har velg alt-element",
    selectAllText: "Velg alt elememt-tekst",
    choicesMin: "Minsteverdi for auto-genererte elementer",
    choicesMax: "Maksverdi for auto-genererte elementer",
    choicesStep: "Forskjellene mellom auto-genererte elementer",
    name: "Navn",
    title: "Tittel",
    cellType: "Celletype",
    colCount: "Antall kolonner",
    choicesOrder: "Velg rekkefølge på valg",
    visible: "Er synlig?",
    isRequired: "Er nødvendig?",
    isAllRowRequired: "Nødvendig svar for alle rader",
    requiredErrorText: "Nødvendig feilmelding",
    startWithNewLine: "Må starte med ny linje?",
    rows: "Antall rader",
    cols: "Antall kolonner",
    placeholder: "Hjelpetekst",
    showPreview: "Er forhåndsvisning av bilde vist?",
    storeDataAsText: "Lagre filinnhold i JSON-resultat som tekst",
    maxSize: "Maksimum filstørrelse i bytes",
    imageHeight: "Bildehøyde",
    imageWidth: "Bildebredde",
    rowCount: "Antall rader",
    columnLayout: "Antall kolonner",
    addRowLocation: "Legg til rad knapp-plassering",
    addRowText: "Legg til rad knapp-tekst",
    removeRowText: "Fjern rad knapp-tekst",
    rateMin: "Minimum sats",
    rateMax: "Maksimum sats",
    rateStep: "Sats steg",
    minRateDescription: "Beskrivelse minimumsvudering",
    maxRateDescription: "Beskrivelse maksimumsvurdering",
    inputType: "Inndata-type",
    optionsCaption: "Tekst for alternativer",
    defaultValue: "Standardverdi",
    cellsDefaultRow: "Standard celletekster",
    surveyEditorTitle: "Rediger skjemainnstillinger",
    qEditorTitle: "Rediger: {0}",
    maxLength: "Maksimum lengde",
    buildExpression: "Bygg",
    editExpression: "Rediger",
    and: "Og",
    or: "Eller",
    remove: "Fjern",
    addCondition: "Legg til",
    // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
    // if: "If",
    // then: "then",
    // setToName: "Target question",
    // fromName: "Question to copy answer from",
    // gotoName: "Question to skip to",
    // ruleIsNotSet: "Rule is incorrect",
    // includeIntoResult: "Include into survey results",
    showTitle: "Vis/skjul tittel",
    expandCollapseTitle: "Utvid/krymp tittel",
    locale: "Standard språk",
    simulator: "Velg enhet",
    landscapeOrientation: "Liggende",
    // portraitOrientation: "Switch to portrait orientation",
    mode: "Modus (rediger/kun lesbart)",
    clearInvisibleValues: "Fjern usynlige verdier",
    cookieName: "Informasjonskapsel navn (for å hindre bruk av skjema to ganger lokalt)",
    sendResultOnPageNext: "Send skjema resultat ved neste side",
    storeOthersAsComment: "Lagre 'andre' verdier i et separat felt",
    showPageTitles: "Vis sidetittel",
    showPageNumbers: "Vis sidenummer",
    pagePrevText: "Forrige side knapp tekst",
    pageNextText: "Neste side knapp tekst",
    completeText: "Fullfør knapp tekst",
    previewText: "Forhåndsvisning knapp tekst",
    editText: "Rediger knapp tekst",
    startSurveyText: "Start knapp tekst",
    showNavigationButtons: "Vis navigasjonsknapper (standard navigering)",
    showPrevButton: "Vis forrige knapp (bruker kan gå til forrige side)",
    firstPageIsStarted: "Den første siden i skjema er startside.",
    showCompletedPage: "Vis ferdigsiden på slutten (completedHtml)",
    goNextPageAutomatic: "Når en har svart alle spørsmål, gå til neste side automatisk",
    showProgressBar: "Vis fremdriftslinje",
    questionTitleLocation: "Spørsmål tittel plassering",
    requiredText: "Svar nødvendig symbol(er)",
    questionStartIndex: "Spørsmål startindeks (1, 2 eller 'A', 'a')",
    showQuestionNumbers: "Vis spørsmålsnummer",
    questionTitleTemplate: "Spørsmål tittel mal, standard er: '{no}. {require} {title}'",
    questionErrorLocation: "Spørsmål feil plassering",
    focusFirstQuestionAutomatic: "Sett fokus på første spørsmål når en endrer side",
    questionsOrder: "Rekkefølge på elementer på siden",
    maxTimeToFinish: "Maks tid for å gjøre ferdig skjema",
    maxTimeToFinishPage: "Maks tid til å gjøre ferdig en side i skjema",
    page: {
      // maxTimeToFinish: "Time limit to finish the page (in seconds)"
    },
    question: {
      // page: "Parent page"
    },
    showTimerPanel: "Vis tidtaking",
    showTimerPanelMode: "Vis tidtaking-modus",
    renderMode: "Gjengivelse modus",
    allowAddPanel: "Tillat å legge til panel",
    allowRemovePanel: "Tillat å fjerne panel",
    // noEntriesText: "Empty entries text",
    panelAddText: "Legg til panel tekst",
    panelRemoveText: "Fjern panel tekst",
    isSinglePage: "Vis alle elementer på en side",
    html: "HTML",
    expression: "Formel",
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
    minValue: "Minimumsverdi",
    maxValue: "Maksimal verdi",
    minLength: "Minimum lengde",
    allowDigits: "Tillat tall",
    minCount: "Minimum count",
    maxCount: "Maximum count",
    regex: "Regular expression",
    surveyvalidator: {
      // text: "Error message",
      // expression: "Validation expression"
    },
    totalText: "Total tekst",
    totalType: "Total type",
    totalExpression: "Total formel",
    totalDisplayStyle: "Total visningsstil",
    totalCurrency: "Total valuta",
    totalFormat: "Total format",
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
    logoPosition: "Logo-posisjon",
    addLogo: "Legg til logo...",
    changeLogo: "Bytt logo...",
    logoPositions: {
      none: "Fjern logo",
      left: "Venstre",
      right: "Høyre",
      top: "Topp",
      bottom: "Bunn"
    },
    tabs: {
      general: "Generelt",
      fileOptions: "Valg",
      html: "HTML-editor",
      columns: "Kolonner",
      rows: "Rader",
      choices: "Valg",
      items: "Elementer",
      visibleIf: "Synlig hvis",
      enableIf: "Tilgjengelig hvis",
      requiredIf: "Nødvendig hvis",
      rateValues: "Rangering verdier",
      choicesByUrl: "Valg fra web",
      matrixChoices: "Standardvalg",
      multipleTextItems: "Tekst inndata",
      numbering: "Nummerering",
      validators: "Valideringer",
      navigation: "Navigering",
      question: "Spørsmål",
      pages: "Sider",
      timer: "Tidtaker/Quiz",
      calculatedValues: "Beregnede verdier",
      triggers: "Triggere",
      templateTitle: "Mal-tittel",
      totals: "Totaler",
      logic: "Logikk",
      layout: "Oppsett",
      data: "Data",
      validation: "Validering",
      cells: "Celler",
      showOnCompleted: "Vis når ferdig",
      logo: "Logo i skjematittel",
      slider: "Slider",
      // expression: "Expression",
      others: "Andre"
    },
    editProperty: "Rediger verdi '{0}'",
    items: "[ Elementer: {0} ]",
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
    enterNewValue: "Vennligst fyll inn verdien.",
    noquestions: "Det er ingen spørsmål i skjemaet.",
    createtrigger: "Vennligst lag en trigger",
    titleKeyboardAdornerTip: "Trykk enter-tasten for å redigere",
    keyboardAdornerTip: "Trykk enter-tasten for å redigere elementet, trykk slette-tasten for å slette elementet, trykk Alt + pil opp/ned for å flytte elementet",
    triggerOn: "På ",
    triggerMakePagesVisible: "Gjør sider synlige:",
    triggerMakeQuestionsVisible: "Gjør elementer synlige:",
    triggerCompleteText: "Fullfør skjema dersom vellykket.",
    triggerNotSet: "Trigger er ikke satt",
    triggerRunIf: "Kjør dersom",
    triggerSetToName: "Endre verdien av: ",
    triggerFromName: "Kopier verdi fra: ",
    triggerRunExpression: "Kjør denne formelen:",
    triggerSetValue: "til: ",
    triggerGotoName: "Gå til spørsmål:",
    triggerIsVariable: "Ikke legg variabelen i resultatet.",
    triggerRunExpressionEmpty: "Vennligst fyll inn en gyldig formel",
    // emptyExpressionPlaceHolder: "Type expression here...",
    noFile: "Ingen fil valgt",
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
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "firstExpanded",
    off: "off",
    // onpanel: "Start on each panel",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "both",
    left: "left",
    // right: "Right",
    color: "color",
    date: "date",
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
    empty: "er tom",
    notempty: "er ikke tom",
    equal: "er lik",
    notequal: "er ikke lik",
    contains: "inneholder",
    notcontains: "inneholder ikke",
    anyof: "noen av",
    allof: "alle av",
    greater: "større enn",
    less: "mindre enn",
    greaterorequal: "større eller lik",
    lessorequal: "mindre eller lik",
    and: "og",
    or: "eller"
  },
  // Embed window
  ew: {
    angular: "Bruk Angular-versjon",
    jquery: "Bruk jQuery-versjon",
    knockout: "Bruk Knockout-versjon",
    react: "Bruk React-versjon",
    vue: "Bruk Vue-versjon",
    bootstrap: "For Bootstrap-rammeverk",
    // modern: "Modern theme",
    // default: "Default theme",
    // orange: "Orange theme",
    // darkblue: "Darkblue theme",
    // darkrose: "Darkrose theme",
    // stone: "Stone theme",
    // winter: "Winter theme",
    // winterstone: "Winter-Stone theme",
    showOnPage: "Vis skjema på en side",
    showInWindow: "Vis skjema i et vindu",
    loadFromServer: "Last skjemadefinisjon som JSON fra server",
    titleScript: "Skript og stiler",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Velg side:",
    showInvisibleElements: "Vis usynlige elementer",
    // hideInvisibleElements: "Hide invisible elements"
  },
  validators: {
    answercountvalidator: "antall svar",
    emailvalidator: "e-post",
    expressionvalidator: "formel",
    numericvalidator: "numerisk",
    regexvalidator: "regex",
    textvalidator: "tekst"
  },
  triggers: {
    completetrigger: "complete skjema",
    setvaluetrigger: "set value",
    copyvaluetrigger: "copy value",
    skiptrigger: "hopp til spørsmål",
    runexpressiontrigger: "kjør formel",
    visibletrigger: "endre synlighet (deprecated)"
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
      title: "La den være tom, dersom den skal være samme som navnet"
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
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["nb"] = nbStrings;
