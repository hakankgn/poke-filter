

```markdown
# Poke Filter Uygulaması

Bu uygulama, Pokémon verilerini filtreleme yeteneği sunan basit bir React uygulamasıdır.

## Nasıl Çalışır?

Uygulama, bir dizi Pokémon verisini ekrana listeler ve kullanıcının girdiği değere göre bu Pokémon'ları filtreler. Kullanıcı, giriş kutusuna Pokémon adını yazarak, adı yazılan Pokémon'ları ekranda görüntüleyebilir.

## Kod Açıklaması

Bu React uygulaması, Pokémon verilerini filtreleme yeteneği sağlayan basit bir Poke Filter uygulamasını oluşturur. İşte önemli kısımlar:

- `useState` hook'u, kullanıcının girdiği değeri yönetmek için kullanılır. Kullanıcı, giriş kutusuna yazdığı Pokémon adına göre filtreleme yapabilir.
- `handleChange` fonksiyonu, kullanıcının giriş kutusuna herhangi bir değer girmesi durumunda, bu değeri `value` state'ine set eder ve Pokémon'ları filtrelemek için kullanılır.

- Pokémon'ları filtreleme işlemi, giriş kutusuna yazılan değere göre gerçekleşir. `filter` fonksiyonu kullanılarak, Pokémon adları içinde arama yapılır ve eşleşen sonuçlar yeni bir dizi olarak elde edilir.

- Ekrana Pokémon'ları listeleyen bir kart bileşeni (`CardItem`) bulunur. Bu bileşen, her bir Pokémon'un adını ve resmini gösterir.

- Pokémon'ları filtreleyerek elde edilen sonuçlar, haritalama (mapping) kullanılarak ekrana listelenir.

Bu uygulama üzerinden, React state yönetimi, bileşenler arası iletişim, temel filtreleme mantığı ve haritalama konularında pratik yapma fırsatı bulunabilir.
```

## Kullanım

1. Uygulamayı başlatmak için projenin bulunduğu dizinde terminal penceresinde `npm start` komutunu çalıştırın.
2. Tarayıcıda `http://localhost:3000` adresine gidin.
3. "Search a Pokemon" kutusuna Pokémon adınızı yazarak, filtreleme yapın.

## Notlar

- Bu uygulama, temel bir Pokémon listesi oluşturarak, kullanıcının girdiği değere göre filtreleme yapma yeteneği sağlar.
- Pokémon verileri, `mockedData` klasöründeki `pokemons` dizisinden alınır.
- `CardItem` bileşeni, her bir Pokémon'u göstermek için kullanılır.
- Kullanıcı, Pokémon adını yazdıkça eşleşen sonuçları görüntüler.


```

AŞAĞIDA BUNUN HATALI OLDUĞU TAMAMLANMAMIŞ OLDUĞU DURUMDAKİ CHALLENGELAR LİSTELENMİŞTİR
### Üçüncü challenge hoş geldiniz!

Temsilini public/challenge3.png'de bulabilirsiniz
Amacımız JavaScript ve React hakkında bazı çok temel becerileri kanıtlamaktır.

Burada, bu mini meydan okuma için gereken tüm talimatları bulacaksınız.

Ekstra gereksinimler:

- Büyük veya küçük harf karakterleri ekleyebilmeli ve bir dize eşleştirebilmelisiniz
- Başlangıç ve bitiş boşluk karakterlerini görmezden gelmelisiniz

## Talimatlar

Bu Codesandbox'ta, uygulamanızı çalıştırmak için ihtiyacınız olan her şeyi içeren eksiksiz bir ortama sahipsiniz. Aşağıdaki talimatları uygulamanız yeterlidir:

1. **App.js** bileşeninde bir girdi oluşturun.
2. Giriş değerini yönetmek için App bileşeni için state oluşturun.
3. State güncellemek için girişten onChange olayını kullanın.
4. **pokemeons** 'u **CardItems**'e dönüştürmek için **App.js**'ye mantık ekleyin, sonuçları giriş değeriyle filtreleyin.

Notlar:

- CardItem bileşeni (name: string, sprite: string) alır -->
```
