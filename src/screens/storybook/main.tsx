import { ButtonUi } from '@/components/ui/button';
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainStoryBookScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <TypographyUi
          size="title"
          weight="bold"
          color="normal"
          style={styles.headerTitle}
        >
          BellacoMarket UI Showcase
        </TypographyUi>

        {/* Typography Section */}
        <CardUi heading="TypographyUi - Tamaños">
          <TypographyUi size="title" weight="bold">
            Title (Bold)
          </TypographyUi>
          <TypographyUi size="subtitle" weight="medium">
            Subtitle (Medium)
          </TypographyUi>
          <TypographyUi size="paragraph">Paragraph (Normal)</TypographyUi>
          <TypographyUi size="small">Small text helper</TypographyUi>
        </CardUi>

        <CardUi heading="TypographyUi - Colores Semánticos">
          <TypographyUi color="normal">Color Normal</TypographyUi>
          <TypographyUi color="info">Color Info</TypographyUi>
          <TypographyUi color="success">Color Success</TypographyUi>
          <TypographyUi color="warning">Color Warning</TypographyUi>
          <TypographyUi color="error">Color Error</TypographyUi>
        </CardUi>

        {/* Button Section */}
        <CardUi heading="ButtonUi - Variantes de Fondo">
          <View style={styles.buttonList}>
            <ButtonUi text="Variant Normal" variant="normal" />
            <ButtonUi text="Variant Info" variant="info" />
            <ButtonUi text="Variant Success" variant="success" />
            <ButtonUi text="Variant Warning" variant="warning" />
            <ButtonUi text="Variant Error" variant="error" />
          </View>
        </CardUi>

        <CardUi heading="ButtonUi - Estados y Contenido">
          <View style={styles.buttonList}>
            <ButtonUi text="Botón Deshabilitado" variant="info" disabled />
            <ButtonUi variant="normal" style={styles.customButton}>
              <TypographyUi color="success" weight="bold">
                ★ Botón con Children Personalizado ★
              </TypographyUi>
            </ButtonUi>
          </View>
        </CardUi>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  container: {
    padding: 20,
    gap: 20,
  },
  headerTitle: {
    textAlign: 'center',
    marginBottom: 8,
  },
  buttonList: {
    gap: 12,
  },
  customButton: {
    borderWidth: 1,
    borderColor: '#34C759',
  },
});

export default MainStoryBookScreen;
