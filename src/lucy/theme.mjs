export default ({ name, colors }) => ({
  name,
  type: 'dark',
  colors: {
    focusBorder: colors.oled_highlight,
    foreground: colors.pure2,
    'widget.shadow': colors.oled_pureBlack,
    'selection.background': colors.oled_selection,
    descriptionForeground: colors.dim3,
    errorForeground: colors.base1,
    'textBlockQuote.background': colors.oled_highlight,
    'textBlockQuote.border': colors.oled_subtleBorder,
    'textCodeBlock.background': colors.oled_highlight,
    'textLink.activeForeground': colors.pure2,
    'textLink.foreground': colors.base2,
    'textPreformat.foreground': colors.pure2,
    'textSeparator.foreground': colors.dim2,
    'button.background': colors.oled_highlight,
    'button.foreground': colors.dim3,
    'button.hoverBackground': colors.oled_selection,
    'dropdown.background': colors.oled_pureBlack,
    'dropdown.listBackground': colors.oled_highlight,
    'dropdown.border': colors.oled_subtleBorder,
    'dropdown.foreground': colors.dim3,
    'input.background': colors.oled_pureBlack,
    'input.border': colors.oled_subtleBorder,
    'input.foreground': colors.pure2,
    'input.placeholderForeground': colors.dim1,
    'inputOption.activeBorder': colors.dim1,
    'inputValidation.errorBackground': colors.oled_pureBlack,
    'inputValidation.errorBorder': colors.base1,
    'inputValidation.infoBackground': colors.oled_pureBlack,
    'inputValidation.infoBorder': colors.accent1,
    'inputValidation.warningBackground': colors.oled_pureBlack,
    'inputValidation.warningBorder': colors.accent2,
    'scrollbar.shadow': colors.oled_pureBlack,
    'scrollbarSlider.activeBackground': colors.translucent9,
    'scrollbarSlider.background': colors.translucent9,
    'scrollbarSlider.hoverBackground': colors.translucent9,
    'badge.foreground': colors.oled_pureBlack,
    'badge.background': colors.base2,
    'progressBar.background': colors.oled_highlight,
    'list.activeSelectionBackground': colors.oled_selection,
    'list.activeSelectionForeground': colors.base2,
    'list.errorForeground': colors.base1,
    'list.warningForeground': colors.accent2,
    'list.dropBackground': colors.translucent,
    'list.focusBackground': colors.oled_selection,
    'list.focusForeground': colors.pure2,
    'list.highlightForeground': colors.pure2,
    'list.hoverBackground': colors.oled_highlight,
    'list.hoverForeground': colors.pure2,
    'list.inactiveSelectionBackground': colors.oled_highlight,
    'list.inactiveSelectionForeground': colors.base2,
    'list.inactiveFocusBackground': colors.oled_highlight,
    'list.invalidItemForeground': colors.base1,
    'activityBar.background': colors.oled_pureBlack,
    'activityBar.dropBackground': colors.translucent,
    'activityBar.foreground': colors.dim3,
    'activityBar.border': colors.oled_faintBorder,
    'activityBarBadge.background': colors.base2,
    'activityBarBadge.foreground': colors.oled_pureBlack,
    'sideBar.background': colors.oled_pureBlack,
    'sideBar.foreground': colors.dim3,
    'sideBar.border': colors.oled_faintBorder,
    'sideBar.dropBackground': colors.translucent,
    'sideBarTitle.foreground': colors.dim1,
    'sideBarSectionHeader.background': colors.oled_pureBlack,
    'sideBarSectionHeader.foreground': colors.dim2,
    'editorGroup.background': colors.oled_pureBlack,
    'editorGroup.border': colors.oled_subtleBorder,
    'editorGroup.dropBackground': colors.translucent,
    'editorGroupHeader.noTabsBackground': colors.oled_pureBlack,
    'editorGroupHeader.tabsBackground': colors.oled_pureBlack,
    'editorGroupHeader.tabsBorder': colors.oled_faintBorder,
    'tab.activeBackground': colors.oled_pureBlack,
    'tab.activeForeground': colors.base2,
    'tab.border': colors.oled_faintBorder,
    'tab.activeBorder': colors.base2,
    'tab.unfocusedActiveBorder': colors.dim3,
    'tab.inactiveBackground': colors.oled_pureBlack,
    'tab.inactiveForeground': colors.dim3,
    'tab.unfocusedActiveForeground': colors.dim4,
    'tab.unfocusedInactiveForeground': colors.dim3,
    'tab.hoverBackground': colors.oled_highlight,
    'tab.unfocusedHoverBackground': colors.oled_highlight,
    'tab.hoverBorder': colors.oled_highlight,
    'tab.unfocusedHoverBorder': colors.oled_faintBorder,
    'editor.background': colors.oled_pureBlack,
    'editor.foreground': colors.pure2,
    'editorLineNumber.foreground': colors.dim1,
    'editorLineNumber.activeForeground': colors.dim4,
    'editorCursor.background': colors.translucent8,
    'editorCursor.foreground': colors.pure2,
    'editor.selectionBackground': colors.oled_selection,
    'editor.inactiveSelectionBackground': colors.translucent3,
    'editor.selectionHighlightBackground': colors.translucent2,
    'editor.selectionHighlightBorder': colors.translucent8,
    'editor.wordHighlightBackground': colors.translucent2,
    'editor.wordHighlightBorder': colors.translucent8,
    'editor.wordHighlightStrongBackground': colors.translucent2,
    'editor.wordHighlightStrongBorder': colors.translucent8,
    'editor.findMatchBackground': colors.translucent2,
    'editor.findMatchBorder': colors.base2,
    'editor.findMatchHighlightBackground': colors.translucent2,
    'editor.findMatchHighlightBorder': colors.translucent8,
    'editor.findRangeHighlightBackground': colors.translucent3,
    'editor.findRangeHighlightBorder': colors.translucent8,
    'editor.hoverHighlightBackground': colors.translucent3,
    'editor.lineHighlightBackground': colors.translucent3,
    'editor.lineHighlightBorder': colors.translucent8,
    'editorLink.activeForeground': colors.accent1,
    'editor.rangeHighlightBackground': colors.oled_highlight,
    'editor.rangeHighlightBorder': colors.oled_faintBorder,
    'editorWhitespace.foreground': colors.dim1,
    'editorIndentGuide.background': colors.oled_faintBorder,
    'editorRuler.foreground': colors.dim1,
    'editorCodeLens.foreground': colors.dim2,
    'editorBracketMatch.background': colors.oled_highlight,
    'editorBracketMatch.border': colors.oled_highlight,
    'editorError.foreground': colors.base1,
    'editorError.border': colors.translucent8,
    'editorWarning.foreground': colors.accent2,
    'editorWarning.border': colors.translucent8,
    'editorInfo.foreground': colors.accent1,
    'editorInfo.border': colors.oled_faintBorder,
    'editorHint.foreground': colors.const,
    'editorHint.border': colors.oled_faintBorder,
    'editorGutter.background': colors.oled_pureBlack,
    'editorGutter.modifiedBackground': colors.accent2,
    'editorGutter.addedBackground': colors.call,
    'editorGutter.deletedBackground': colors.base1,
    'diffEditor.insertedTextBackground': colors.translucent4,
    'diffEditor.insertedTextBorder': colors.translucent8,
    'diffEditor.removedTextBackground': colors.translucent6,
    'diffEditor.removedTextBorder': colors.translucent8,
    'editorWidget.background': colors.oled_highlight,
    'editorWidget.border': colors.oled_subtleBorder,
    'editorSuggestWidget.background': colors.oled_highlight,
    'editorSuggestWidget.border': colors.oled_subtleBorder,
    'editorSuggestWidget.foreground': colors.dim4,
    'editorSuggestWidget.highlightForeground': colors.pure2,
    'editorSuggestWidget.selectedBackground': colors.dim2,
    'editorHoverWidget.background': colors.oled_highlight,
    'editorHoverWidget.border': colors.oled_subtleBorder,
    'debugExceptionWidget.background': colors.oled_highlight,
    'debugExceptionWidget.border': colors.oled_subtleBorder,
    'editorMarkerNavigation.background': colors.oled_highlight,
    'editorMarkerNavigationError.background': colors.base1,
    'editorMarkerNavigationWarning.background': colors.accent2,
    'editorMarkerNavigationInfo.background': colors.accent1,
    'peekView.border': colors.oled_subtleBorder,
    'peekViewEditor.background': colors.oled_pureBlack,
    'peekViewEditorGutter.background': colors.oled_pureBlack,
    'peekViewEditor.matchHighlightBackground': colors.dim1,
    'peekViewResult.background': colors.oled_highlight,
    'peekViewResult.fileForeground': colors.dim3,
    'peekViewResult.lineForeground': colors.dim3,
    'peekViewResult.matchHighlightBackground': colors.dim1,
    'peekViewResult.selectionBackground': colors.oled_selection,
    'peekViewResult.selectionForeground': colors.pure2,
    'peekViewTitle.background': colors.oled_highlight,
    'peekViewTitleDescription.foreground': colors.dim3,
    'peekViewTitleLabel.foreground': colors.pure2,
    'merge.currentHeaderBackground': colors.translucent7,
    'merge.currentContentBackground': colors.translucent6,
    'merge.incomingHeaderBackground': colors.translucent5,
    'merge.incomingContentBackground': colors.translucent4,
    'merge.border': colors.oled_subtleBorder,
    'merge.commonHeaderBackground': colors.translucent2,
    'merge.commonContentBackground': colors.translucent3,
    'editorOverviewRuler.border': colors.oled_faintBorder,
    'editorOverviewRuler.currentContentForeground': colors.oled_highlight,
    'editorOverviewRuler.incomingContentForeground': colors.oled_highlight,
    'editorOverviewRuler.findMatchForeground': colors.translucent2,
    'editorOverviewRuler.rangeHighlightForeground': colors.translucent2,
    'editorOverviewRuler.selectionHighlightForeground': colors.translucent2,
    'editorOverviewRuler.wordHighlightForeground': colors.translucent2,
    'editorOverviewRuler.wordHighlightStrongForeground': colors.translucent2,
    'editorOverviewRuler.modifiedForeground': colors.accent2,
    'editorOverviewRuler.addedForeground': colors.call,
    'editorOverviewRuler.deletedForeground': colors.base1,
    'editorOverviewRuler.errorForeground': colors.base1,
    'editorOverviewRuler.warningForeground': colors.accent2,
    'editorOverviewRuler.infoForeground': colors.accent1,
    'panel.background': colors.oled_pureBlack,
    'panel.border': colors.oled_subtleBorder,
    'panel.dropBackground': colors.translucent,
    'panelTitle.activeBorder': colors.base2,
    'panelTitle.activeForeground': colors.base2,
    'panelTitle.inactiveForeground': colors.dim3,
    'statusBar.background': colors.oled_pureBlack,
    'statusBar.foreground': colors.dim2,
    'statusBar.border': colors.oled_faintBorder,
    'statusBar.debuggingBackground': colors.dim2,
    'statusBar.debuggingForeground': colors.pure2,
    'statusBar.debuggingBorder': colors.oled_faintBorder,
    'statusBar.noFolderBackground': colors.oled_pureBlack,
    'statusBar.noFolderForeground': colors.dim2,
    'statusBar.noFolderBorder': colors.oled_faintBorder,
    'statusBarItem.activeBackground': colors.oled_selection,
    'statusBarItem.hoverBackground': colors.oled_highlight,
    'statusBarItem.prominentBackground': colors.oled_highlight,
    'statusBarItem.prominentHoverBackground': colors.oled_selection,
    'titleBar.activeBackground': colors.oled_pureBlack,
    'titleBar.activeForeground': colors.dim3,
    'titleBar.inactiveBackground': colors.oled_pureBlack,
    'titleBar.inactiveForeground': colors.dim1,
    'titleBar.border': colors.oled_faintBorder,
    'notificationCenter.border': colors.oled_subtleBorder,
    'notificationCenterHeader.foreground': colors.dim3,
    'notificationCenterHeader.background': colors.oled_highlight,
    'notificationToast.border': colors.oled_subtleBorder,
    'notifications.foreground': colors.dim4,
    'notifications.background': colors.oled_highlight,
    'notifications.border': colors.oled_subtleBorder,
    'notificationLink.foreground': colors.base2,
    'extensionButton.prominentForeground': colors.pure2,
    'extensionButton.prominentBackground': colors.oled_highlight,
    'extensionButton.prominentHoverBackground': colors.dim1,
    'pickerGroup.border': colors.oled_subtleBorder,
    'pickerGroup.foreground': colors.dim1,
    'quickInput.background': colors.oled_pureBlack,
    'quickInput.foreground': colors.pure2,
    'quickInputList.focusBackground': colors.oled_highlightDark,
    'quickInputTitle.background': colors.oled_pureBlack,
    'terminal.background': colors.oled_pureBlack,
    'terminal.foreground': colors.pure2,
    'terminal.ansiBlack': colors.oled_pureBlack,
    'terminal.ansiBlue': colors.accent2,
    'terminal.ansiBrightBlack': colors.dim2,
    'terminal.ansiBrightBlue': colors.accent2,
    'terminal.ansiBrightCyan': colors.accent1,
    'terminal.ansiBrightGreen': colors.call,
    'terminal.ansiBrightMagenta': colors.const,
    'terminal.ansiBrightRed': colors.base1,
    'terminal.ansiBrightWhite': colors.pure2,
    'terminal.ansiBrightYellow': colors.base2,
    'terminal.ansiCyan': colors.accent1,
    'terminal.ansiGreen': colors.call,
    'terminal.ansiMagenta': colors.const,
    'terminal.ansiRed': colors.base1,
    'terminal.ansiWhite': colors.pure2,
    'terminal.ansiYellow': colors.base2,
    'terminal.selectionBackground': colors.oled_selection,
    'terminalCursor.background': colors.translucent8,
    'terminalCursor.foreground': colors.pure2,
    'debugToolBar.background': colors.oled_pureBlack,
    'welcomePage.buttonBackground': colors.oled_highlight,
    'welcomePage.buttonHoverBackground': colors.oled_selection,
    'walkThrough.embeddedEditorBackground': colors.oled_pureBlack,
    'gitDecoration.modifiedResourceForeground': colors.call,
    'gitDecoration.deletedResourceForeground': colors.base1,
    'gitDecoration.untrackedResourceForeground': colors.accent2,
    'gitDecoration.ignoredResourceForeground': colors.dim1,
    'gitDecoration.conflictingResourceForeground': colors.accent2
  },
  tokenColors: [
    {
      scope: [
        'comment',
        'comment keyword',
        'comment markup.underline.link',
        'comment string',
        'comment punctuation.definition',
        'comment punctuation',
        'comment text'
      ],
      settings: {
        fontStyle: 'italic',
        foreground: colors.dim2
      }
    },
    {
      scope: 'comment storage.type',
      settings: {
        foreground: colors.dim2
      }
    },
    {
      scope: 'comment entity.name.type',
      settings: {
        foreground: colors.dim4
      }
    },
    {
      scope: ['comment variable', 'comment variable.other'],
      settings: {
        foreground: colors.dim4
      }
    },
    {
      scope: 'comment keyword.codetag.notation',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'comment.git-status.header.remote',
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'comment.git-status.header.local',
      settings: {
        foreground: colors.accent1
      }
    },
    {
      scope: 'comment.other.git-status.head',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'constant',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'constant.other',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'constant.other.property',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'constant.other.color',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'constant.other.character-class.escape',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'constant.other.key',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'constant.other.symbol',
      settings: {
        foreground: colors.accent2
      }
    },
    {
      scope: 'constant.numeric',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'constant.language',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'constant.character.escape',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'constant.numeric.line-number.find-in-files',
      settings: {
        foreground: colors.dim1
      }
    },
    {
      scope: 'constant.numeric.line-number.match.find-in-files',
      settings: {
        foreground: colors.base2
      }
    },
    {
      scope: 'entity.name.section',
      settings: {
        foreground: colors.base2
      }
    },
    {
      scope: 'entity.name',
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: 'entity.name.class',
      settings: {
        foreground: colors.accent1
      }
    },
    {
      scope: 'entity.name.constant',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'entity.name.namespace',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'entity.other.inherited-class',
      settings: {
        fontStyle: 'italic',
        foreground: colors.accent1
      }
    },
    {
      scope: 'entity.name.function',
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: [
        'entity.name.tag',
        'entity.name.tag.js.jsx support.class.component.js.jsx'
      ],
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        fontStyle: 'italic',
        foreground: colors.accent1
      }
    },
    {
      scope: [
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.parent-selector-suffix.css',
        'entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css'
      ],
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: 'entity.other.attribute-name.id.css',
      settings: {
        foreground: colors.accent2
      }
    },
    {
      scope:
        'entity.other.attribute-name.pseudo-class.cssentity.other.pseudo-class.css',
      settings: {
        fontStyle: 'italic',
        foreground: colors.accent1
      }
    },
    {
      scope: ['entity.name.function', 'support.function'],
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: 'entity.other.git-status.hex',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'invalid',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      scope: 'keyword',
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'keyword.control',
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'keyword.other.substitution',
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: 'keyword.other.template.beginkeyword.other.template.end',
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: [
        'keyword.operator.heading.restructuredtext',
        'keyword.operator.table.row.restructuredtext',
        'keyword.operator.table.data.restructuredtext'
      ],
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      scope: 'markup.bold',
      settings: {
        fontStyle: 'bold'
      }
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: colors.base2
      }
    },
    {
      scope: 'markup.raw',
      settings: {
        foreground: colors.accent2
      }
    },
    {
      scope: 'markup.underline',
      settings: {
        fontStyle: 'underline'
      }
    },
    {
      scope: 'markup.underline.link',
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: [
        'markup.inserted',
        'markup.inserted punctuation.definition.inserted'
      ],
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: [
        'markup.deleted',
        'markup.deleted punctuation.definition.deleted'
      ],
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: [
        'markup.changed',
        'markup.changed punctuation.definition.changed'
      ],
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: [
        'markup.ignored',
        'markup.ignored punctuation.definition.ignored'
      ],
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: 'markup.untracked',
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: 'markup.quote',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      scope: [
        'meta.brace.round',
        'meta.brace.square',
        'meta.brace.curly',
        'meta.delimiter.comma.js',
        'meta.function-call.without-arguments.js',
        'meta.function-call.method.without-arguments.js'
      ],
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: [
        'meta.function-call',
        'meta.function-call.arguments meta.function-call'
      ],
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: [
        'meta.function-call meta.function-call.arguments',
        'meta.function-call meta.arguments',
        'meta.function-call meta.group'
      ],
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'meta.instance.constructor',
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: 'meta.attribute-with-value.class string',
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: 'meta.attribute-with-value.id string',
      settings: {
        foreground: colors.accent2
      }
    },
    {
      scope: [
        'source.json meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
        'source.json meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
        'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string'
      ],
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: [
        'source.json meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
        'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string'
      ],
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'meta.object.member',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'meta.property-list.css variable.other',
      settings: {
        foreground: colors.accent2
      }
    },
    {
      scope: ['entity.name.constant.preprocessor', 'meta.preprocessor'],
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'meta.diff.git-diff.header',
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'punctuation',
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: [
        'punctuation.definition.tag',
        'punctuation.definition.tag source',
        'punctuation.definition.group.begin.ruby',
        'punctuation.definition.group.end.ruby'
      ],
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: 'punctuation.definition.group',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'punctuation.definition.comment',
      settings: {
        foreground: colors.dim2
      }
    },
    {
      scope: [
        'punctuation.definition.variable',
        'punctuation.definition.keyword.scss',
        'punctuation.definition.entity.css'
      ],
      settings: {
        foreground: colors.dim4
      }
    },
    {
      scope: [
        'punctuation.section.embedded',
        'punctuation.section.embedded entity.name.tag',
        'punctuation.section.embedded constant.other',
        'punctuation.section.embedded source'
      ],
      settings: {
        foreground: colors.accent2
      }
    },
    {
      scope: [
        'punctuation.template-string.element.begin',
        'punctuation.template-string.element.end',
        'punctuation.definition.string.template.begin',
        'punctuation.definition.string.template.end',
        'string.quoted.template punctuation.definition.string.begin',
        'string.quoted.template punctuation.definition.string.end'
      ],
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: [
        'meta.paragraph.markdown meta.dummy.line-break',
        'meta.paragraph.markdown meta.hard-line-break.markdown'
      ],
      settings: {
        background: colors.const
      }
    },
    {
      scope: 'region.redish',
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'region.orangish',
      settings: {
        foreground: colors.accent2
      }
    },
    {
      scope: 'region.yellowish',
      settings: {
        foreground: colors.base2
      }
    },
    {
      scope: 'region.greenish',
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: 'region.bluish',
      settings: {
        foreground: colors.accent1
      }
    },
    {
      scope: 'region.purplish',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'region.pinkish',
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'region.whitish',
      settings: {
        foreground: colors.pure1
      }
    },
    {
      scope: 'source',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: ['source.scss', 'source.sass'],
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: [
        'source.sass variable.other',
        'source.sass variable.sass',
        'source.scss variable.other',
        'source.scss variable.scss',
        'source.scss variable.sass',
        'source.css variable.other',
        'source.css variable.scss',
        'source.less variable.other',
        'source.less variable.other.less',
        'source.less variable.declaration.less'
      ],
      settings: {
        fontStyle: 'italic',
        foreground: colors.accent2
      }
    },
    {
      scope: 'source.git-show.commit.sha',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: [
        'source.git-show.author',
        'source.git-show.date',
        'source.git-diff.command',
        'source.git-diff.command meta.diff.git-diff.header.from-file',
        'source.git-diff.command meta.diff.git-diff.header.to-file'
      ],
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: [
        'source.git-show meta.diff.git-diff.header.extended.index.from-sha',
        'source.git-show meta.diff.git-diff.header.extended.index.to-sha'
      ],
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'source.git-show meta.diff.range.unified',
      settings: {
        foreground: colors.accent2
      }
    },
    {
      scope: [
        'source.git-show meta.diff.header.from-file',
        'source.git-show meta.diff.header.to-file'
      ],
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: 'storage',
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'storage.type',
      settings: {
        fontStyle: 'italic',
        foreground: colors.accent1
      }
    },
    {
      scope: 'storage.type.extends',
      settings: {
        fontStyle: 'normal',
        foreground: colors.base1
      }
    },
    {
      scope: 'storage.type.function.arrow',
      settings: {
        fontStyle: 'normal',
        foreground: colors.base1
      }
    },
    {
      scope: 'storage.modifier',
      settings: {
        fontStyle: 'italic',
        foreground: colors.base1
      }
    },
    {
      scope: 'storage.class.restructuredtext.ref',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: ['storage.modifier.package', 'storage.modifier.import'],
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'string',
      settings: {
        foreground: colors.base2
      }
    },
    {
      scope: 'string.unquoted.label',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'string source',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'string source punctuation.section.embedded',
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: ['string.other.link.title', 'string.other.link.description'],
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'string.other.link.description.title',
      settings: {
        foreground: colors.accent1
      }
    },
    {
      scope: [
        'string.regexp punctuation.definition.string.begin',
        'string.regexp punctuation.definition.string.end'
      ],
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: ['string.other.ref', 'string.other.restructuredtext.ref'],
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: 'string.other.git-status.help.key',
      settings: {
        foreground: colors.dim4
      }
    },
    {
      scope: 'string.other.git-status.remote',
      settings: {
        foreground: colors.base1
      }
    },
    {
      scope: 'support.constant',
      settings: {
        foreground: colors.accent1
      }
    },
    {
      scope: 'support.constant.handlebars',
      settings: {
        foreground: colors.dim3
      }
    },
    {
      scope: 'support.function',
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: ['support.type', 'entity.name.type.object.console'],
      settings: {
        fontStyle: 'italic',
        foreground: colors.accent1
      }
    },
    {
      scope: 'support.variable',
      settings: {
        foreground: colors.accent1
      }
    },
    {
      scope: 'support.type.property-name',
      settings: {
        fontStyle: 'normal',
        foreground: colors.pure2
      }
    },
    {
      scope: 'support.class',
      settings: {
        foreground: colors.accent1
      }
    },
    {
      scope: 'text',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'text.find-in-files',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: ['variable', 'variable.other'],
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: ['variable.parameter', 'parameters variable.function'],
      settings: {
        fontStyle: 'italic',
        foreground: colors.accent2
      }
    },
    {
      scope: [
        'variable.language',
        'variable.parameter.function.language.special.self.python'
      ],
      settings: {
        fontStyle: 'italic',
        foreground: colors.dim4
      }
    },
    {
      scope: 'variable.language.arguments',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'variable.other.class',
      settings: {
        foreground: colors.accent1
      }
    },
    {
      scope: 'variable.other.constant',
      settings: {
        foreground: colors.const
      }
    },
    {
      scope: 'variable.other.member',
      settings: {
        foreground: colors.pure2
      }
    },
    {
      scope: 'variable.function',
      settings: {
        foreground: colors.call
      }
    },
    {
      scope: 'variable.other.substitution',
      settings: {
        foreground: colors.accent2
      }
    },
    {
      scope: [
        'source.ruby variable.other.readwrite.instance.ruby',
        'source.ruby variable.other.readwrite.class.ruby'
      ],
      settings: {
        foreground: colors.const
      }
    }
  ]
})
