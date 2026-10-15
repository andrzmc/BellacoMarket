import LoaderUi from '@/components/ui/loader';
import React, { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  CatalogItem,
  PaginatorTemplateProps,
} from '@/models/interfaces/templates';
import useApi from '@/services/hooks/useApi';
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';

const PaginatorTemplate: FC<PaginatorTemplateProps> = props => {
  const { request, numColumns, renderItem, interceptor } = props;
  const { data, loading, error } = useApi(request, interceptor);

  return (
    <>
      {loading && !data?.items?.length && (
        <View style={styles.loaderContainer}>
          <LoaderUi size="big" />
        </View>
      )}

      {error && !data?.items?.length && (
        <View style={styles.loaderContainer}>
          <TypographyUi color="error">{error}</TypographyUi>
        </View>
      )}

      {data && data.items?.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={
            numColumns && numColumns > 1 ? styles.columnWrapper : undefined
          }
          data={data.items}
          keyExtractor={(item, index) => `${item.value}-${index}`}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              {renderItem ? (
                renderItem(item as CatalogItem)
              ) : (
                <CardUi>
                  <TypographyUi weight="bold">{item.label}</TypographyUi>
                </CardUi>
              )}
            </View>
          )}
          numColumns={numColumns}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    gap: 10,
  },
  columnWrapper: {
    gap: 10,
  },
  itemContainer: {
    flex: 1,
  },
});

export default PaginatorTemplate;
