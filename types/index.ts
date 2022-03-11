export enum phoneFormat {
  normal = '$1$2$3',
  separator = '$1 - $2 - $3',
  spacing = '$1 $2 $3',
  hide = '$1****$3'
}

export type phoneParams = 'normal' | 'separator' | 'spacing' | 'hide'
