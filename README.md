# Pedido PMG NV2 clube de campo

O site é empacotado com Capacitor para gerar aplicativos Android e iOS. O arquivo
`index.html` continua sendo a origem da interface.

## Requisitos

- Node.js e npm
- Android Studio e Android SDK para compilar Android
- macOS com Xcode para compilar e publicar iOS

## Preparar o projeto

```bash
npm install
npm run assets:generate
npm run cap:sync
```

O ícone inicial pode ser substituído em `assets/icon.svg`; regenere os recursos
nativos com `npm run assets:generate`.

## Android

No Windows ou macOS com Android Studio instalado:

```bash
npm run android:open
```

No Android Studio, gere um Android App Bundle assinado (AAB) para enviar ao
Google Play Console.

## iOS

Em um Mac com Xcode instalado:

```bash
npm run ios:open
```

No Xcode, configure a assinatura e gere o arquivo para envio ao App Store
Connect. A compilação e o envio para a App Store exigem macOS/Xcode.

O identificador `br.com.pedidopmg.app` e o nome do app são usados nos projetos
nativos. O identificador não deve ser alterado depois da publicação.
