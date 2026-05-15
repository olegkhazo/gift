'use client'

import { useI18n } from '@/lib/i18n'
import Footer from '@/components/Footer'

const enContent = `
<h1>Privacy Policy</h1>

<p><strong>Effective date:</strong> [Insert date]<br/>
<strong>Website:</strong> bullshitgifts.eu<br/>
<strong>Brand:</strong> ShitGift<br/>
<strong>Contact email:</strong> support@shitgift.eu</p>

<p>This Privacy Policy explains how we collect, use, store and protect personal data when you visit our website, place an order, contact us, or otherwise use our services.</p>

<p>We process personal data in accordance with Regulation (EU) 2016/679, the General Data Protection Regulation ("GDPR"), and applicable Czech data protection laws, including Act No. 110/2019 Coll., on Personal Data Processing.</p>

<h2>1. Data Controller</h2>

<p>The data controller responsible for the processing of your personal data is:</p>

<p>
[Legal company name]<br/>
[Company registration number / IČO]<br/>
[Registered address]<br/>
Czech Republic<br/>
Email: support@shitgift.eu
</p>

<p><em>Please replace the information above with the correct legal entity details before publishing this Privacy Policy.</em></p>

<h2>2. Personal Data We Collect</h2>

<p>We may collect and process the following categories of personal data:</p>

<h3>2.1. Customer data</h3>
<p>When you place an order, we may collect:</p>
<ul>
<li>full name;</li>
<li>email address;</li>
<li>billing address;</li>
<li>shipping address;</li>
<li>phone number, if required for delivery;</li>
<li>order details;</li>
<li>payment status;</li>
<li>communication with customer support.</li>
</ul>

<h3>2.2. Recipient data</h3>
<p>Because our service allows customers to send a gift to another person, we may process personal data of the recipient, including:</p>
<ul>
<li>recipient's name;</li>
<li>delivery address;</li>
<li>phone number, if required by the delivery provider;</li>
<li>custom message or note provided by the customer.</li>
</ul>
<p>The customer is responsible for ensuring that the recipient data they provide is accurate and lawful.</p>

<h3>2.3. Payment data</h3>
<p>Payments are processed by external payment providers. We do not store full card numbers or full payment credentials on our servers. We may receive limited payment-related information, such as payment status, transaction ID, payment method type and fraud-prevention signals.</p>

<h3>2.4. Website and technical data</h3>
<p>When you use our website, we may process technical data such as:</p>
<ul>
<li>IP address;</li>
<li>browser type and version;</li>
<li>device type;</li>
<li>operating system;</li>
<li>pages visited;</li>
<li>date and time of access;</li>
<li>cookies and similar technologies;</li>
<li>log files required for website security and functionality.</li>
</ul>

<h3>2.5. Customer support data</h3>
<p>If you contact us, we may process:</p>
<ul>
<li>your email address;</li>
<li>your name, if provided;</li>
<li>the content of your message;</li>
<li>attachments or screenshots you send to us;</li>
<li>our replies and communication history.</li>
</ul>

<h2>3. Purposes and Legal Bases for Processing</h2>

<p>We process personal data for the following purposes:</p>

<table>
<thead><tr><th>Purpose</th><th>Personal data</th><th>Legal basis under GDPR</th></tr></thead>
<tbody>
<tr><td>Processing and delivering orders</td><td>Customer data, recipient data, order data</td><td>Performance of a contract, Art. 6(1)(b) GDPR</td></tr>
<tr><td>Payment processing</td><td>Payment status, transaction data</td><td>Performance of a contract, Art. 6(1)(b) GDPR</td></tr>
<tr><td>Customer support</td><td>Contact details, communication history</td><td>Performance of a contract or legitimate interest, Art. 6(1)(b) and Art. 6(1)(f) GDPR</td></tr>
<tr><td>Delivery and logistics</td><td>Name, address, phone number if needed</td><td>Performance of a contract, Art. 6(1)(b) GDPR</td></tr>
<tr><td>Fraud prevention and abuse prevention</td><td>Order data, technical data, payment signals</td><td>Legitimate interest, Art. 6(1)(f) GDPR</td></tr>
<tr><td>Website security</td><td>IP address, logs, technical data</td><td>Legitimate interest, Art. 6(1)(f) GDPR</td></tr>
<tr><td>Compliance with tax and accounting duties</td><td>Invoices, order records, payment records</td><td>Legal obligation, Art. 6(1)(c) GDPR</td></tr>
<tr><td>Marketing emails, if used</td><td>Email address, consent record</td><td>Consent, Art. 6(1)(a) GDPR</td></tr>
<tr><td>Analytics and marketing cookies, if used</td><td>Cookie identifiers, usage data</td><td>Consent, Art. 6(1)(a) GDPR</td></tr>
</tbody>
</table>

<h2>4. Anonymous Gift Service</h2>

<p>Our service is designed to allow customers to send a gift without revealing their identity to the recipient.</p>
<p>We may keep the customer's identity confidential from the recipient, except where disclosure is required by law, court order, competent authority, payment dispute, fraud investigation, abuse prevention, or protection of our legal rights.</p>
<p>Customers must not use our service for harassment, threats, unlawful conduct, discrimination, stalking, defamation or any other abusive purpose. We reserve the right to cancel orders that appear unlawful, abusive or harmful.</p>

<h2>5. Cookies</h2>

<p>Our website may use cookies and similar technologies.</p>

<h3>5.1. Strictly necessary cookies</h3>
<p>These cookies are required for the website to function properly, for example:</p>
<ul>
<li>cart functionality;</li>
<li>checkout process;</li>
<li>security;</li>
<li>session management;</li>
<li>fraud prevention.</li>
</ul>
<p>These cookies do not require consent because they are necessary for the operation of the website.</p>

<h3>5.2. Analytics and marketing cookies</h3>
<p>If we use analytics, advertising, retargeting, social media pixels or similar technologies, we will request your consent before placing such cookies on your device, where required by law.</p>
<p>You can manage or withdraw your cookie consent through the cookie banner or cookie settings available on the website.</p>

<h2>6. Recipients of Personal Data</h2>

<p>We may share personal data with the following categories of recipients:</p>
<ul>
<li>payment processors;</li>
<li>delivery and logistics providers;</li>
<li>hosting providers;</li>
<li>website and IT service providers;</li>
<li>email service providers;</li>
<li>accounting and tax advisors;</li>
<li>legal advisors;</li>
<li>fraud prevention and security service providers;</li>
<li>public authorities, courts or regulators where required by law.</li>
</ul>
<p>All processors acting on our behalf are required to process personal data only according to our instructions and to protect the data appropriately.</p>

<h2>7. International Data Transfers</h2>

<p>Some of our service providers may process personal data outside the European Economic Area.</p>
<p>Where personal data is transferred outside the EEA, we will ensure that appropriate safeguards are in place, such as:</p>
<ul>
<li>an adequacy decision by the European Commission;</li>
<li>Standard Contractual Clauses approved by the European Commission;</li>
<li>other lawful transfer mechanisms under GDPR.</li>
</ul>

<h2>8. Data Retention</h2>

<p>We keep personal data only for as long as necessary for the purposes described in this Privacy Policy.</p>
<p>Typical retention periods are:</p>

<table>
<thead><tr><th>Data category</th><th>Retention period</th></tr></thead>
<tbody>
<tr><td>Order data</td><td>For the duration of the contract and then as required for tax, accounting and legal purposes</td></tr>
<tr><td>Accounting and invoice data</td><td>Usually up to 10 years, where required by applicable Czech accounting and tax laws</td></tr>
<tr><td>Customer support communication</td><td>Up to 3 years after the last communication, unless longer retention is necessary</td></tr>
<tr><td>Website logs</td><td>Usually up to 12 months, unless longer retention is needed for security or legal reasons</td></tr>
<tr><td>Marketing consent records</td><td>Until consent is withdrawn or no longer needed</td></tr>
<tr><td>Cookie consent records</td><td>For the duration required to prove valid consent</td></tr>
</tbody>
</table>

<p>We may retain data for a longer period where necessary to establish, exercise or defend legal claims.</p>

<h2>9. Your Rights Under GDPR</h2>

<p>You have the following rights under GDPR:</p>
<ul>
<li>right of access to your personal data;</li>
<li>right to rectification of inaccurate data;</li>
<li>right to erasure of personal data;</li>
<li>right to restriction of processing;</li>
<li>right to data portability;</li>
<li>right to object to processing based on legitimate interest;</li>
<li>right to withdraw consent at any time, where processing is based on consent;</li>
<li>right to lodge a complaint with a supervisory authority.</li>
</ul>
<p>To exercise your rights, contact us at: <a href="mailto:support@shitgift.eu">support@shitgift.eu</a></p>
<p>We may need to verify your identity before responding to your request.</p>

<h2>10. Right to Lodge a Complaint</h2>

<p>If you believe that we process your personal data unlawfully, you may contact the Czech supervisory authority:</p>
<p>
Úřad pro ochranu osobních údajů<br/>
Pplk. Sochora 27<br/>
170 00 Praha 7<br/>
Czech Republic
</p>
<p>You may also contact the supervisory authority in your EU country of residence.</p>

<h2>11. Security</h2>

<p>We use appropriate technical and organisational measures to protect personal data against unauthorised access, loss, misuse, alteration or disclosure.</p>
<p>These measures may include:</p>
<ul>
<li>secure hosting;</li>
<li>access controls;</li>
<li>encryption where appropriate;</li>
<li>secure payment processing through external payment providers;</li>
<li>regular monitoring of website security;</li>
<li>limited access to personal data by authorised persons only.</li>
</ul>
<p>However, no online service can guarantee absolute security.</p>

<h2>12. Children's Data</h2>

<p>Our website and services are not intended for children. We do not knowingly collect personal data from children.</p>
<p>If you believe that a child has provided us with personal data, please contact us and we will take appropriate steps to delete such data.</p>

<h2>13. Automated Decision-Making</h2>

<p>We do not use personal data for automated decision-making that produces legal or similarly significant effects.</p>
<p>We may use automated tools for fraud detection, payment security, spam prevention or website protection, but such tools are used only to protect our service and customers.</p>

<h2>14. Changes to This Privacy Policy</h2>

<p>We may update this Privacy Policy from time to time.</p>
<p>The latest version will always be available on our website. If we make significant changes, we may notify users by email or by displaying a notice on the website.</p>

<h2>15. Contact</h2>

<p>For any questions about this Privacy Policy or personal data processing, please contact us:</p>
<p>Email: <a href="mailto:support@shitgift.eu">support@shitgift.eu</a></p>
`

const csContent = `
<h1>Zásady ochrany osobních údajů</h1>

<p><strong>Datum účinnosti:</strong> [doplňte datum]<br/>
<strong>Webová stránka:</strong> bullshitgifts.eu<br/>
<strong>Značka:</strong> ShitGift<br/>
<strong>Kontaktní e-mail:</strong> support@shitgift.eu</p>

<p>Tyto Zásady ochrany osobních údajů vysvětlují, jak shromažďujeme, používáme, uchováváme a chráníme osobní údaje při návštěvě našich webových stránek, vytvoření objednávky, kontaktování zákaznické podpory nebo jiném využívání našich služeb.</p>

<p>Osobní údaje zpracováváme v souladu s Nařízením Evropského parlamentu a Rady EU 2016/679, obecným nařízením o ochraně osobních údajů („GDPR"), a s příslušnými právními předpisy České republiky, zejména zákonem č. 110/2019 Sb., o zpracování osobních údajů.</p>

<h2>1. Správce osobních údajů</h2>

<p>Správcem osobních údajů je:</p>

<p>
[název právnické osoby / jméno podnikatele]<br/>
[IČO]<br/>
[sídlo / adresa podnikání]<br/>
Česká republika<br/>
E-mail: support@shitgift.eu
</p>

<p><em>Před zveřejněním těchto zásad prosím nahraďte údaje v hranatých závorkách skutečnými údaji provozovatele webu.</em></p>

<h2>2. Jaké osobní údaje zpracováváme</h2>

<p>Můžeme zpracovávat následující kategorie osobních údajů:</p>

<h3>2.1 Údaje zákazníka</h3>
<p>Při vytvoření objednávky můžeme zpracovávat zejména:</p>
<ul>
<li>jméno a příjmení;</li>
<li>e-mailovou adresu;</li>
<li>fakturační adresu;</li>
<li>dodací adresu;</li>
<li>telefonní číslo, pokud je potřebné pro doručení;</li>
<li>údaje o objednávce;</li>
<li>stav platby;</li>
<li>komunikaci se zákaznickou podporou.</li>
</ul>

<h3>2.2 Údaje příjemce dárku</h3>
<p>Protože naše služba umožňuje zákazníkům poslat dárek jiné osobě, můžeme zpracovávat také osobní údaje příjemce dárku, zejména:</p>
<ul>
<li>jméno a příjmení příjemce;</li>
<li>doručovací adresu;</li>
<li>telefonní číslo, pokud je potřebné pro doručení;</li>
<li>osobní zprávu nebo poznámku zadanou zákazníkem.</li>
</ul>
<p>Zákazník odpovídá za to, že údaje příjemce, které nám poskytne, jsou přesné, aktuální a poskytnuté v souladu s právními předpisy.</p>

<h3>2.3 Platební údaje</h3>
<p>Platby jsou zpracovávány externími poskytovateli platebních služeb. Neukládáme úplná čísla platebních karet ani úplné platební přihlašovací údaje na našich serverech.</p>
<p>Můžeme obdržet pouze omezené platební informace, například:</p>
<ul>
<li>stav platby;</li>
<li>identifikátor transakce;</li>
<li>typ platební metody;</li>
<li>informace potřebné pro prevenci podvodů.</li>
</ul>

<h3>2.4 Technické údaje a údaje o používání webu</h3>
<p>Při používání našich webových stránek můžeme zpracovávat technické údaje, například:</p>
<ul>
<li>IP adresu;</li>
<li>typ a verzi prohlížeče;</li>
<li>typ zařízení;</li>
<li>operační systém;</li>
<li>navštívené stránky;</li>
<li>datum a čas přístupu;</li>
<li>cookies a podobné technologie;</li>
<li>logy potřebné pro zabezpečení a správné fungování webu.</li>
</ul>

<h3>2.5 Údaje ze zákaznické podpory</h3>
<p>Pokud nás kontaktujete, můžeme zpracovávat:</p>
<ul>
<li>vaši e-mailovou adresu;</li>
<li>vaše jméno, pokud jej uvedete;</li>
<li>obsah vaší zprávy;</li>
<li>přílohy nebo screenshoty, které nám zašlete;</li>
<li>naši odpověď a historii komunikace.</li>
</ul>

<h2>3. Účely a právní základy zpracování</h2>

<p>Osobní údaje zpracováváme pro následující účely:</p>

<table>
<thead><tr><th>Účel zpracování</th><th>Osobní údaje</th><th>Právní základ podle GDPR</th></tr></thead>
<tbody>
<tr><td>Zpracování a doručení objednávky</td><td>Údaje zákazníka, údaje příjemce, údaje o objednávce</td><td>Plnění smlouvy, čl. 6 odst. 1 písm. b) GDPR</td></tr>
<tr><td>Zpracování platby</td><td>Stav platby, údaje o transakci</td><td>Plnění smlouvy, čl. 6 odst. 1 písm. b) GDPR</td></tr>
<tr><td>Zákaznická podpora</td><td>Kontaktní údaje, historie komunikace</td><td>Plnění smlouvy nebo oprávněný zájem, čl. 6 odst. 1 písm. b) a f) GDPR</td></tr>
<tr><td>Doručení a logistika</td><td>Jméno, adresa, telefonní číslo, pokud je potřebné</td><td>Plnění smlouvy, čl. 6 odst. 1 písm. b) GDPR</td></tr>
<tr><td>Prevence podvodů a zneužití služby</td><td>Údaje o objednávce, technické údaje, platební signály</td><td>Oprávněný zájem, čl. 6 odst. 1 písm. f) GDPR</td></tr>
<tr><td>Zabezpečení webu</td><td>IP adresa, logy, technické údaje</td><td>Oprávněný zájem, čl. 6 odst. 1 písm. f) GDPR</td></tr>
<tr><td>Plnění daňových a účetních povinností</td><td>Faktury, objednávky, platební záznamy</td><td>Plnění právní povinnosti, čl. 6 odst. 1 písm. c) GDPR</td></tr>
<tr><td>Marketingové e-maily, pokud je používáme</td><td>E-mailová adresa, záznam o souhlasu</td><td>Souhlas, čl. 6 odst. 1 písm. a) GDPR</td></tr>
<tr><td>Analytické a marketingové cookies, pokud je používáme</td><td>Cookie identifikátory, údaje o používání webu</td><td>Souhlas, čl. 6 odst. 1 písm. a) GDPR</td></tr>
</tbody>
</table>

<h2>4. Služba anonymního dárku</h2>

<p>Naše služba je navržena tak, aby zákazník mohl poslat dárek jiné osobě bez toho, aby byla jeho totožnost příjemci automaticky odhalena.</p>
<p>Totožnost zákazníka můžeme vůči příjemci zachovat jako důvěrnou, s výjimkou případů, kdy je její zpřístupnění vyžadováno právními předpisy, rozhodnutím soudu, příslušným orgánem veřejné moci, v rámci platebního sporu, vyšetřování podvodu, prevence zneužití služby nebo ochrany našich právních nároků.</p>
<p>Zákazník nesmí naši službu používat k obtěžování, vyhrožování, nezákonnému jednání, diskriminaci, stalkingu, pomluvě nebo jinému zneužití. Vyhrazujeme si právo zrušit objednávku, která se jeví jako nezákonná, škodlivá, obtěžující nebo jinak zneužívající naši službu.</p>

<h2>5. Cookies</h2>

<p>Naše webové stránky mohou používat cookies a podobné technologie.</p>

<h3>5.1 Nezbytné cookies</h3>
<p>Tyto cookies jsou potřebné pro správné fungování webových stránek, například pro:</p>
<ul>
<li>funkci nákupního košíku;</li>
<li>proces objednávky a platby;</li>
<li>zabezpečení webu;</li>
<li>správu relace;</li>
<li>prevenci podvodů.</li>
</ul>
<p>Tyto cookies nevyžadují souhlas, protože jsou nezbytné pro fungování webu a poskytování služby.</p>

<h3>5.2 Analytické a marketingové cookies</h3>
<p>Pokud používáme analytické, reklamní, retargetingové, sociální nebo podobné technologie, požádáme vás před jejich uložením o souhlas, pokud to vyžaduje právní úprava.</p>
<p>Souhlas s cookies můžete spravovat nebo odvolat prostřednictvím cookie lišty nebo nastavení cookies dostupného na webových stránkách.</p>

<h2>6. Příjemci osobních údajů</h2>

<p>Osobní údaje můžeme sdílet s následujícími kategoriemi příjemců:</p>
<ul>
<li>poskytovatelé platebních služeb;</li>
<li>dopravci a logističtí partneři;</li>
<li>poskytovatelé hostingu;</li>
<li>poskytovatelé IT a webových služeb;</li>
<li>poskytovatelé e-mailových služeb;</li>
<li>účetní a daňoví poradci;</li>
<li>právní poradci;</li>
<li>poskytovatelé bezpečnostních a antifraudových služeb;</li>
<li>orgány veřejné moci, soudy nebo regulátoři, pokud to vyžaduje zákon.</li>
</ul>
<p>Všichni zpracovatelé, kteří jednají naším jménem, jsou povinni zpracovávat osobní údaje pouze podle našich pokynů a zajistit jejich odpovídající ochranu.</p>

<h2>7. Předávání osobních údajů mimo EHP</h2>

<p>Někteří naši poskytovatelé služeb mohou zpracovávat osobní údaje mimo Evropský hospodářský prostor.</p>
<p>Pokud dochází k předání osobních údajů mimo EHP, zajistíme, aby byly použity odpovídající záruky podle GDPR, například:</p>
<ul>
<li>rozhodnutí Evropské komise o odpovídající ochraně;</li>
<li>standardní smluvní doložky schválené Evropskou komisí;</li>
<li>jiné zákonné mechanismy předávání podle GDPR.</li>
</ul>

<h2>8. Doba uchovávání osobních údajů</h2>

<p>Osobní údaje uchováváme pouze po dobu nezbytnou pro účely uvedené v těchto zásadách.</p>
<p>Typické doby uchovávání jsou:</p>

<table>
<thead><tr><th>Kategorie údajů</th><th>Doba uchování</th></tr></thead>
<tbody>
<tr><td>Údaje o objednávce</td><td>Po dobu trvání smluvního vztahu a následně po dobu nutnou pro daňové, účetní a právní účely</td></tr>
<tr><td>Účetní a fakturační údaje</td><td>Obvykle až 10 let, pokud to vyžadují příslušné české účetní a daňové předpisy</td></tr>
<tr><td>Komunikace se zákaznickou podporou</td><td>Až 3 roky od poslední komunikace, pokud není delší uchování nezbytné</td></tr>
<tr><td>Webové logy</td><td>Obvykle až 12 měsíců, pokud delší uchování není potřebné pro bezpečnostní nebo právní účely</td></tr>
<tr><td>Záznamy o marketingovém souhlasu</td><td>Do odvolání souhlasu nebo dokud již nejsou potřebné</td></tr>
<tr><td>Záznamy o souhlasu s cookies</td><td>Po dobu potřebnou k prokázání platného souhlasu</td></tr>
</tbody>
</table>

<p>Osobní údaje můžeme uchovávat déle, pokud je to nezbytné pro určení, výkon nebo obhajobu právních nároků.</p>

<h2>9. Vaše práva podle GDPR</h2>

<p>Podle GDPR máte zejména tato práva:</p>
<ul>
<li>právo na přístup k osobním údajům;</li>
<li>právo na opravu nepřesných údajů;</li>
<li>právo na výmaz osobních údajů;</li>
<li>právo na omezení zpracování;</li>
<li>právo na přenositelnost údajů;</li>
<li>právo vznést námitku proti zpracování založenému na oprávněném zájmu;</li>
<li>právo kdykoliv odvolat souhlas, pokud je zpracování založeno na souhlasu;</li>
<li>právo podat stížnost u dozorového úřadu.</li>
</ul>
<p>Pro uplatnění svých práv nás kontaktujte na: <a href="mailto:support@shitgift.eu">support@shitgift.eu</a></p>
<p>Před vyřízením žádosti můžeme potřebovat ověřit vaši totožnost.</p>

<h2>10. Právo podat stížnost</h2>

<p>Pokud se domníváte, že vaše osobní údaje zpracováváme v rozporu s právními předpisy, můžete se obrátit na český dozorový úřad:</p>
<p>
Úřad pro ochranu osobních údajů<br/>
Pplk. Sochora 27<br/>
170 00 Praha 7<br/>
Česká republika
</p>
<p>Případně se můžete obrátit také na dozorový úřad ve státě EU, kde máte bydliště.</p>

<h2>11. Zabezpečení osobních údajů</h2>

<p>Používáme vhodná technická a organizační opatření k ochraně osobních údajů před neoprávněným přístupem, ztrátou, zneužitím, změnou nebo zveřejněním.</p>
<p>Tato opatření mohou zahrnovat zejména:</p>
<ul>
<li>bezpečný hosting;</li>
<li>řízení přístupových oprávnění;</li>
<li>šifrování, pokud je vhodné;</li>
<li>bezpečné zpracování plateb prostřednictvím externích poskytovatelů;</li>
<li>pravidelné sledování bezpečnosti webu;</li>
<li>omezený přístup k osobním údajům pouze pro oprávněné osoby.</li>
</ul>
<p>Žádná online služba však nemůže zaručit absolutní bezpečnost.</p>

<h2>12. Osobní údaje dětí</h2>

<p>Naše webové stránky a služby nejsou určeny dětem. Vědomě neshromažďujeme osobní údaje dětí.</p>
<p>Pokud se domníváte, že nám dítě poskytlo osobní údaje, kontaktujte nás a přijmeme vhodná opatření k jejich odstranění.</p>

<h2>13. Automatizované rozhodování</h2>

<p>Nepoužíváme osobní údaje k automatizovanému rozhodování, které by mělo právní nebo obdobně významné účinky.</p>
<p>Můžeme používat automatizované nástroje pro detekci podvodů, zabezpečení plateb, prevenci spamu nebo ochranu webu, tyto nástroje však slouží pouze k ochraně služby a zákazníků.</p>

<h2>14. Změny těchto zásad</h2>

<p>Tyto Zásady ochrany osobních údajů můžeme čas od času aktualizovat.</p>
<p>Nejnovější verze bude vždy dostupná na našich webových stránkách. Pokud provedeme významné změny, můžeme uživatele informovat e-mailem nebo oznámením na webových stránkách.</p>

<h2>15. Kontakt</h2>

<p>V případě dotazů týkajících se těchto Zásad ochrany osobních údajů nebo zpracování osobních údajů nás kontaktujte:</p>
<p>E-mail: <a href="mailto:support@shitgift.eu">support@shitgift.eu</a></p>
`

export default function PrivacyPage() {
  const { language } = useI18n()
  const content = language === 'cs' ? csContent : enContent

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div
            className="bg-white rounded-lg shadow-sm p-6 sm:p-10 prose prose-gray max-w-none
              [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:text-gray-900
              [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-gray-900
              [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:text-gray-800
              [&_p]:text-gray-700 [&_p]:mb-3 [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_ul]:text-gray-700
              [&_li]:mb-1
              [&_a]:text-primary-600 [&_a]:underline
              [&_em]:text-gray-500 [&_em]:text-sm
              [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4 [&_table]:text-sm
              [&_th]:bg-gray-100 [&_th]:text-left [&_th]:px-3 [&_th]:py-2 [&_th]:border [&_th]:border-gray-300 [&_th]:font-semibold
              [&_td]:px-3 [&_td]:py-2 [&_td]:border [&_td]:border-gray-300 [&_td]:align-top"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
