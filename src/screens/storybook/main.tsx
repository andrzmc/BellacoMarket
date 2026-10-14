import { ButtonUi } from '@/components/ui/button';
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
        <View style={styles.section}>
          <TypographyUi
            size="subtitle"
            weight="bold"
            color="info"
            style={styles.sectionTitle}
          >
            TypographyUi - Tamaños
          </TypographyUi>
          <TypographyUi size="title" weight="bold">
            Title (Bold)
          </TypographyUi>
          <TypographyUi size="subtitle" weight="medium">
            Subtitle (Medium)
          </TypographyUi>
          <TypographyUi size="paragraph">Paragraph (Normal)</TypographyUi>
          <TypographyUi size="small">Small text helper</TypographyUi>
        </View>

        <View style={styles.section}>
          <TypographyUi
            size="subtitle"
            weight="bold"
            color="info"
            style={styles.sectionTitle}
          >
            TypographyUi - Colores Semánticos
          </TypographyUi>
          <TypographyUi color="normal">Color Normal</TypographyUi>
          <TypographyUi color="info">Color Info</TypographyUi>
          <TypographyUi color="success">Color Success</TypographyUi>
          <TypographyUi color="warning">Color Warning</TypographyUi>
          <TypographyUi color="error">Color Error</TypographyUi>
        </View>

        {/* Button Section */}
        <View style={styles.section}>
          <TypographyUi
            size="subtitle"
            weight="bold"
            color="info"
            style={styles.sectionTitle}
          >
            ButtonUi - Variantes de Fondo
          </TypographyUi>
          <View style={styles.buttonList}>
            <ButtonUi text="Variant Normal" variant="normal" />
            <ButtonUi text="Variant Info" variant="info" />
            <ButtonUi text="Variant Success" variant="success" />
            <ButtonUi text="Variant Warning" variant="warning" />
            <ButtonUi text="Variant Error" variant="error" />
          </View>
        </View>

        <View style={styles.section}>
          <TypographyUi
            size="subtitle"
            weight="bold"
            color="info"
            style={styles.sectionTitle}
          >
            ButtonUi - Estados y Contenido
          </TypographyUi>
          <View style={styles.buttonList}>
            <ButtonUi text="Botón Deshabilitado" variant="info" disabled />
            <ButtonUi variant="normal" style={styles.customButton}>
              <TypographyUi color="success" weight="bold">
                ★ Botón con Children Personalizado ★
              </TypographyUi>
            </ButtonUi>
          </View>
        </View>
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
  section: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    gap: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    paddingBottom: 6,
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
