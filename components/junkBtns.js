            {/* Color Prop here works on IOS but creates bg on android bg on andy text on ios */}
            <View style={styles.buttonContainer}>
            <Button raised={true}  style={styles.myButtons} title="Notify Button" onPress={this._onPressButton} accessibilityLabel="Learn more" />
            </View>
               
            {/* NIOSS */}
            <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TNF</Text>
              </View>
            </TouchableNativeFeedback> 
