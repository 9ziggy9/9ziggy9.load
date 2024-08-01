BUILD_DIR = ./dist
LIB_DIR   = ./lib

all:
	npx webpack --config webpack.config.js

clean:
	rm -rf $(BUILD_DIR) $(LIB_DIR)
