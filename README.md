# iview-snippets

iview snippets plugin for vscode.

## Table

| Table   | Snippet                              |
| ------- | ------------------------------------ |
| i-Table | `<Table columns='' data=''></Table>` |

## Form

| Form          | Snippet                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| i-Form        | `<Form ref='' :model='' :rules=''></Form>`                                                                        |
| i-Form-item   | `<FormItem label='' prop=''></FormItem>`                                                                          |
| i-Form-footer | `<FormItem><Button type='primary' @click='confirm'>确定</Button><Button @click='cancel'>取消</Button></FormItem>` |

## Modal

| Modal          | Snippet                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| i-Modal        | `<Modal ref='xxxRef' :value='xxxModal' :title='xxxTitle' @on-ok='ok' @on-cancel='cancel'></Modal>`                    |
| i-Modal-footer | `<div slot='footer'><Button type='primary' @click='confirm'>确定</Button><Button @click='cancel'>取消</Button></div>` |

## Page

| Page   | Snippet                                                                                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------------------- |
| i-Page | `<Page :total='page.total' show-total :current='page.pageIndex' :page-size='page.pageSize' @on-change='pageIndexChange'/>` |

## slot

| slot           | Snippet                      |
| -------------- | ---------------------------- |
| i-slot-header  | `<div slot='header'></div>`  |
| i-slot-content | `<div slot='content'></div>` |
| i-slot-footer  | `<div slot='footer'></div>`  |

## Button

| Button           | Snippet                            |
| ---------------- | ---------------------------------- |
| i-Button-default | `<Button type='default'></Button>` |
| i-Button-primary | `<Button type='primary'></Button>` |
| i-Button-dashed  | `<Button type='dashed'></Button>`  |
| i-Button-text    | `<Button type='text'></Button>`    |
| i-Button-info    | `<Button type='info'></Button>`    |
| i-Button-success | `<Button type='success'></Button>` |
| i-Button-warning | `<Button type='warning'></Button>` |
| i-Button-error   | `<Button type='error'></Button>`   |

## Input

| Button           | Snippet                                    |
| ---------------- | ------------------------------------------ |
| i-Input-text     | `<Input type='text' value=''></Input>`     |
| i-Input-password | `<Input type='password' value=''></Input>` |
| i-Input-textarea | `<Input type='textarea' value=''></Input>` |
| i-Input-url      | `<Input type='url' value=''></Input>`      |
| i-Input-email    | `<Input type='email' value=''></Input>`    |
| i-Input-date     | `<Input type='date' value=''></Input>`     |
| i-Input-number   | `<Input type='number' value=''></Input>`   |
| i-Input-tel      | `<Input type='tel' value=''></Input>`      |

## Icon

| Icon          | Snippet                           |
| ------------- | --------------------------------- |
| i-Icon        | `<Icon type='' size=''></Icon>`   |
| i-Icon-custom | `<Icon custom='' size=''></Icon>` |

## Message

| Message           | Snippet                                    |
| ----------------- | ------------------------------------------ |
| i-Message-info    | `this.$Message.info({ content: '' });`     |
| i-Message-success | `this.$Message.success({ content:: '' });` |
| i-Message-warning | `this.$Message.warning({ content: '' });`  |
| i-Message-error   | `this.$Message.error({ content: '' });`    |
| i-Message-loading | `this.$Message.loading({ content: '' });`  |

## Notice

| Notice           | Snippet                                   |
| ---------------- | ----------------------------------------- |
| i-Notice-open    | `this.$Notice.open({ content: '' });`     |
| i-Notice-info    | `this.$Notice.info({ content: '' });`     |
| i-Notice-success | `this.$Notice.success({ content:: '' });` |
| i-Notice-warning | `this.$Notice.warning({ content: '' });`  |
| i-Notice-error   | `this.$Notice.error({ content: '' });`    |

## Poptip

| Poptip   | Snippet                                                 |
| -------- | ------------------------------------------------------- |
| i-Poptip | `<Poptip trigger='hover' title='' content=''></Poptip>` |

## color

| Button                | Snippet   |
| --------------------- | --------- |
| i-color-primary       | `#2d8cf0` |
| i-color-light-primary | `#5cadff` |
| i-color-dark-primary  | `#2b85e4` |
| i-color-info          | `#2db7f5` |
| i-color-success       | `#19be6b` |
| i-color-warning       | `#ff9900` |
| i-color-error         | `#ed4014` |
| i-color-title         | `#17233d` |
| i-color-content       | `#515a6e` |
| i-color-sub-color     | `#808695` |
| i-color-disabled      | `#c5c8ce` |
| i-color-border        | `#dcdee2` |
| i-color-divider       | `#e8eaec` |
| i-color-background    | `#17233d` |

Enjoy it !