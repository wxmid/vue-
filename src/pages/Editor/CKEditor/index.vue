<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
    /*
    npm install --save @ckeditor/ckeditor5-vue @ckeditor/ckeditor5-build-classic
    npm install --save \
    @ckeditor/ckeditor5-vue \
    @ckeditor/ckeditor5-dev-webpack-plugin \
    @ckeditor/ckeditor5-dev-utils \
    postcss-loader \
    raw-loader@0.5.1
    */
    // import Vue from 'vue';
    // import CKEditor from '@ckeditor/ckeditor5-vue';
    // Vue.use( CKEditor );
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    // import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
    // import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
    // import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
    // import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
    // import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // plugins: [
                    //     EssentialsPlugin,
                    //     BoldPlugin,
                    //     ItalicPlugin,
                    //     LinkPlugin,
                    //     ParagraphPlugin
                    // ],
                    //
                    toolbar: {
                        // items: [
                            // "undo", //撤销
                            // "redo", //不撤销
                            // "bold", //加粗
                            // "italic", //斜体
                            // "blockQuote",  //块引用
                            // "imageTextAlternative", //用于图片加载不出来时替换显示的文字
                            // "imageUpload", // 插入图片
                            // "heading", // 标题
                            // "imageStyle:full",  //图片与上下文组合方式：图片占一整行
                            // "imageStyle:side",  //图片与上下文组合方式：图片在文字的旁边
                            // "link", // 链接
                            // "numberedList",   //有序列表
                            // "bulletedList",    //无序列表
                            // 'source',
                            // 'save',
                            // 'NewPage',
                            // 'Preview',
                            // 'Templates',
                            // 'Cut',
                            // 'Copy',
                            // 'Paste',
                            // 'PasteText',
                            // 'PasteFromWord',
                            // 'Print',
                            // 'SpellChecker',
                            // 'Scayt',
                            // 'Undo',
                            // 'Redo',
                            // 'Find',
                            // 'Replace',
                            // 'SelectAll',
                            // 'RemoveFormat',
                            // 'Form',
                            // 'Checkbox',
                            // 'Radio',
                            // 'TextField',
                            // 'Textarea',
                            // 'Select',
                            // 'Button',
                            // 'ImageButton',
                            // 'HiddenField',
                            // 'Bold',
                            // 'Italic',
                            // 'Underline',
                            // 'Strike',
                            // 'Subscript',
                            // 'Superscript',
                            // 'NumberedList',
                            // 'BulletedList',
                            // 'Outdent',
                            // 'Indent',
                            // 'Blockquote',
                            // 'CreateDiv',
                            // 'JustifyLeft',
                            // 'JustifyCenter',
                            // 'JustifyRight',
                            // 'JustifyBlock',
                            // 'BidiLtr',
                            // 'BidiRtl',
                            // 'Link',
                            // 'Unlink',
                            // 'Anchor',
                            // 'Image',
                            // 'Flash',
                            // 'Table',
                            // 'HorizontalRule',
                            // 'Smiley',
                            // 'SpecialChar',
                            // 'PageBreak',
                            // 'Styles',
                            // 'Format',
                            // 'Font',
                            // 'FontSize',
                            // 'TextColor',
                            // 'BGColor',
                            // 'Maximize',
                            // 'ShowBlocks',
                            // 'About'
                        // ]
                    }
                }
            };
        }
    }
</script>