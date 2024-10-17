### 目次 <!-- omit in toc -->

- [1 要件](#1要件)
- [構成](#構成)

# 1 要件

- 載せたい内容
  - 職歴
  - 技術分野
  - 今後の展望
  - 成果物
  -
- 見せ方
  - ヘッダーに内容一覧
    - 普段は非表示でカーソル合わせると出る
    - カーソル合わせると広がる(apple のサイトにみたいに)
  - トップページはスクロールしていくと内容一覧が並んでいる
    - 一つ一つはスクロールアニメーション搭載

# 構成

```mermaid
classDiagram
    class Page {

    }

    class Header {
      OnMouthOver()
      ShowContens()
      HideCOntents()
    }

    class HeaderContents {
      isShow
      titles[]
      OnMouthOver()
      ShowDetail(number)
      HideDetail(number)
    }

        class HeaderDetail {
      isShow
      headerData
    }


    class FrontContents {
      isShow
      GoPageTop()
    }

        class LinksAndContact {
    }

    class FrontContent {
      GoContentDetail()
    }

        class ContentDetail {
        isShow
        Visit()

    }

    Page <|-- Header
    Page <|-- FrontContents
    Page <|-- ContentDetail
    Header <|-- HeaderContents
    HeaderContents <|-- HeaderDetail
    FrontContents <|-- FrontContent
    FrontContents <|-- FrontContent
    FrontContents <|-- FrontContent
    FrontContents <|-- LinksAndContact

```
