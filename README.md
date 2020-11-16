# iview-snippets

iview snippets plugin for vscode.

## Table

| Table   | Snippet                              |
| ------- | ------------------------------------ |
| i-Table | `<Table columns='' data=''></Table>` |

## Form

| Form          | Snippet                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| i-Form        | `<Form ref='' :model='' :rules=''></Form>`                                                           |
| i-Form-item   | `<FormItem label='' prop=''></FormItem>`                                                             |
| i-Form-footer | `<FormItem><Button type='primary' @click=''>ok</Button><Button @click=''>cancel</Button></FormItem>` |

## Modal

| Modal          | Snippet                                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| i-Modal        | `<Modal ref='' :value='' :title='' @on-ok='ok' @on-cancel='cancel'></Modal>`                             |
| i-Modal-footer | `<div slot='footer'><Button type='primary' @click=''>ok</Button><Button @click=''>cancel</Button></div>` |

## Page

| Page   | Snippet                                                  |
| ------ | -------------------------------------------------------- |
| i-Page | `<Page :total='' show-total :current='' :page-size=''/>` |

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

| Input            | Snippet                                    |
| ---------------- | ------------------------------------------ |
| i-Input-text     | `<Input type='text' value=''></Input>`     |
| i-Input-password | `<Input type='password' value=''></Input>` |
| i-Input-textarea | `<Input type='textarea' value=''></Input>` |
| i-Input-url      | `<Input type='url' value=''></Input>`      |
| i-Input-email    | `<Input type='email' value=''></Input>`    |
| i-Input-date     | `<Input type='date' value=''></Input>`     |
| i-Input-number   | `<Input type='number' value=''></Input>`   |
| i-Input-tel      | `<Input type='tel' value=''></Input>`      |

## Radio

| Radio        | Snippet                                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| i-Radio      | `<Radio v-model=''>Radio</Radio>`                                                                                                      |
| i-RadioGroup | `<RadioGroup v-model=''><Radio v-for='(ratio, i) in ratios' :key='ratio.id' :label='ratio.value' {{ratio.label}}</Radio></RadioGroup>` |

## Checkbox

| Checkbox        | Snippet                                                                                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| i-Checkbox      | `<Checkbox v-model=''></Checkbox>`                                                                                                                                   |
| i-CheckboxGroup | `<Checkbox-group v-model=''><Checkbox v-for='(checkbox, i) in checkboxes' :key='checkbox.id' :label='checkbox.value' {{checkbox.label}}</Checkbox></Checkbox-group>` |

## Switch

| Switch   | Snippet                                      |
| -------- | -------------------------------------------- |
| i-Switch | `<Switch v-model='' @on-change=''></Switch>` |

## Spin

| Spin   | Snippet                 |
| ------ | ----------------------- |
| i-Spin | `<Spin v-if=''></Spin>` |

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

| color                 | Snippet   |
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
