DEPLOY_DIR = $(HOME)/source/9ziggy9.github.io
BUILD_DIR  = $(HOME)/source/9ziggy9.load/dist
LIB_DIR    = $(HOME)/source/9ziggy9.load/lib

.PHONY: all deploy clean

all:
	npx webpack --config webpack.config.js

deploy: all
	cd $(DEPLOY_DIR)                   && \
	rm -rf $(DEPLOY_DIR)/*             && \
	cp -r $(BUILD_DIR)/* $(DEPLOY_DIR) && \
	git add .                          && \
	git commit -m "deployment push"    && \
	git push

clean:
	rm -rf $(BUILD_DIR) $(LIB_DIR)
