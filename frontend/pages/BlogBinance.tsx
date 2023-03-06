import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './comp/Navbar'
import Footer from './comp/Footer'
import binance from './Img/binance.png'
import ParagraphBlog from '../pages/comp/ParagraphBlog'

export default function main() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <main className="main">
        <Navbar />
        <div className='w-[1080px] mx-auto py-24'>
            <Image className='mx-auto pb-20' src={binance} alt="" width={800} />
            <div className='w-[640px] mx-auto'>
              <ParagraphBlog title='Binance' content='Binance je největší kryptoměnová burza na světě, která je již mnoholet velmi populární. Na Binance jsou registrovány miliony obchodníků z celého světa a denně se zde obchoduje s nepředstavitelně velkýmičástkami peněz.
Binance je oblíbená zejména pro obchodování s kryptoměnami, ale mnoho lidí zde kryptoměny také nakupuje. Vzhledem k tomu, že nákup kryptoměn na Binance může být pro začátečníky poměrně obtížný, rozhodl jsem se připravit tento článek. Je to průvodce, který vás krok za krokem provede celým procesem nákupu.
Pokud vás tedy zajímá, jak nakoupit kryptoměny na Binance, jste na správném místě.
' />
              <ParagraphBlog title='Vlastníte nějakou peněženku?' content='Přesněji řečeno peněženku na kryptoměny - pokud hodláte obchodovat s kryptoměnami na Binance (a držet je tam), nemusíte se o ni v tuto chvíli starat.
Pokud se však na Binance registrujete s úmyslem kryptoměny pouze nakupovat a čekat, až jejich hodnota vzroste, pak bych vám rozhodně doporučil peněženku si pořídit.
Kryptoměny jsou jako peníze a je třeba je uchovávat v bezpečí, proto nedoporučuju držet kryptoměny na burzách/účetních místech po dlouhou dobu. Není to totiž bezpečné ;viz to, co se stalo 8. května 2019. Burza Binance byla vykradena a celkem bylo odcizeno 7000 bitcoinů v hodnotě přibližně 40 milionů USD. Binance má však vlastní fond na ochranu majetku, což znamená, že uživatelé o své bitcoiny nepřišli a všechny byly získány zpět.
Kryptoměny lze bezpečně uložit například pomocí softwarové peněženky Exodus (zdarma) nebo ultra bezpečné hardwarové peněženky Trezor (cca 1 800 Kč). K dispozici jsou samozřejmě i další možnosti a typy peněženek.
Na konci článku vám ukážu, jak kryptoměny do peněženky Exodus okamžitě převést. Pokud tedy chcete zopakovat náš postup, můžete si zřídit kryptoměnovou peněženku Exodus.
' />
              <ParagraphBlog title='Nákup kryptoměny na Binance' content='Pro nákup kryptoměny na jakékoli burze nebo burze se musíte zaregistrovat. Tím samozřejmě začínáte. Pojďme začít! 
Krok 1: Přejděte na stránku burzy Binance, klikněte na tlačítko Registrovat. Dále budete muset vyplnit svůj e-mail, heslo, získat své osobní klientské číslo pomocí krátkého formuláře zde a také projít jednoduchým bezpečnostním formulářem.
Jakmile dokončíte celý proces registrace a potvrdíte e-mail, který vám Binance zaslala, můžete se přihlásit.
Krok 2: Ihned po prvním přihlášení budete vyzváni k zapnutí dvoufaktorového ověřování (2FA). To znamená, že každé přihlášení budete muset potvrdit prostřednictvím SMS nebo Google Authenticator. Pokud chcete dále zvýšit zabezpečení svého účtu, důrazně doporučuji zapnout 2FA. Pokud tak nechcete učinit, můžete tuto bezpečnostní funkci přeskočit pomocí tlačítka "Prozatím přeskočit".
Pokud tento krok přeskočíte nebo zapnete 2FA, budete na konci přesměrováni na platformu Binance, konkrétně na údaje o svém účtu.
Nejprve však budete muset na svůj obchodní účet vložit nějakou částku, a to buď v BTC, nebo třeba v USDT.
' />
              <ParagraphBlog title='Jak si tedy kryptoměny koupit?' content='Krok 3: Chcete-li obchodovat s kryptoměnami na Binance, musíte je tam koupit nebo poslat z jiné burzy/směny/peněženky. Tato část ukazuje skutečný nákup pomocí debetní karty. Nejprve klikněte na položku Fondy a až se objeví nabídka, klikněte na položku Koupit kreditní kartou.
Nyní budete přesměrováni na formulář pro nákup. Zde si můžete vybrat z kryptoměn, které jsou v současné době k dispozici k nákupu - Bitcoin, Litecoin, XRP (Ripple) a Ethereum. Můžete si zde také vybrat, zda chcete kryptoměny koupit v dolarech nebo v eurech.
Měli byste proto zvážit, co je pro vás výhodnější. Jako příklad uvedu, že jste si koupili kryptoměnu BTC za 50 USD. Založením příkazu k nákupu kryptoměn však nákup nekončí, ale začíná.
Jak vidíte z nákupního formuláře, v době psaní tohoto článku činil poplatek za nákup kreditní kartou na Binance 3,5 %. To se však v průběhu času změní, takže v době, kdy budete číst tento článek, se poplatky již mohly změnit.
Krok 4: Kliknutím na tlačítko Koupit nyní ve výše uvedeném formuláři se dostanete na stránku, kde již probíhá nákup. Nákup je zabezpečen službou Simplex, třetí stranou, která je zodpovědná za platbu. Pokud jste u společnosti Simplex ještě nikdy nenakupovali, budete muset projít ověřovacím procesem, který zabere jen několik minut. Nejprve bude třeba ověřit a vyplnit následující údaje: vaše jméno, místo a telefonní číslo.
Dále je třeba ověřit pravost zadané e-mailové adresy a telefonního čísla.
Nyní, před závěrečným procesem ověření (odesláním dokumentů), vás čeká samotná platba kryptoměny. Zde jednoduše zadáte údaje o své debetní nebo kreditní kartě, známé online nakupujícím, potvrdíte transakci a objednávka nákupu kryptoměn bude zadána!
Krok 5: Posledním a nejdelším krokem v procesu ověřování je ověření totožnosti zákazníka. Jedná se stále o stejný proces, ale rozhodl jsem se tento krok oddělit. Zde musí být ověřena vaše totožnost, stejně jako je tomu například u CoinMate a Coinbase. Je to z právních důvodů a kvůli ochraně před praním špinavých peněz.
Ověření totožnosti vyžaduje občanský průkaz/pas/řidičský průkaz. Příslušný doklad (v našem případě občanský průkaz) z obou stran čitelně vyfoťte a nahrajte do systému pomocí tlačítka pro výběr souboru. Nakonec přepište číslo a datum platnosti příslušného dokladu.
Poté klikněte na tlačítko Nahrát doklad a je hotovo.
Krok 6: Pokud byl váš účet úspěšně ověřen a platba kryptoměnou proběhla bez problémů, zobrazí se vám stránka. Kde budete vráceni ze Simplexu na burzu Binance a systém se vás zeptá, zda byla platba dokončena. Pokud ne, můžete platbu zopakovat. Poté budete muset několik minut počkat, než bude transakce potvrzena a kryptoměna bude na vašem účtu.
To je vše - kryptoměnu jste na Binance úspěšně nakoupili.
V okamžiku, kdy je transakce potvrzena, objeví se ve vaší historii transakcí a nakoupená kryptoměna se objeví také ve vašem přehledu zůstatků.
' />
              <ParagraphBlog title='Odesílání kryptoměn z Binance do peněženky Exodus' content='Kryptoměnu není vhodné ukládat na burze nebo směnárně. Vždy ji přesuňte do vlastní peněženky, pokud s ní neplánujete obchodovat. K tomu můžete použít peněženku Exodus zmíněnou na začátku tohoto článku.
Chcete-li vybrat kryptoměnu, stačí v přehledu zůstatků kliknout na možnost Withdraw (u příslušné kryptoměny).
Budete přesměrováni na formulář pro výběr kryptoměny. Zde zadejte adresu peněženky, do které chcete kryptoměnu poslat.
Tyto informace poskytuje sama peněženka Exodus v údajích o peněžence BTC. Při žádosti o výběr z Binance se k potvrzení žádosti použije také e-mailová adresa. Jak vidíte, burza bere zabezpečení opravdu vážně.


V našem případě byla kryptoměna převedena asi za 10 minut, což bylo opravdu rychle. Kryptoměny jsou v bezpečí a nákup byl uskutečněn. Doufám, že vám tento průvodce nákupem kryptoměn na burze Binance pomůže a celý proces vám usnadní.
' />
            </div>
        </div>
        <Footer />
      </main>
    </>
  )
}