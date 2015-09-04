/* Generated by Opal 0.6.3 */
(function ($opal) {
    var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $hash2 = $opal.hash2;

    if ($scope.RUBY_ENGINE['$==']("opal")) {
    }
    ;
    self.$include((($a = $opal.Object._scope.Asciidoctor) == null ? $opal.cm('Asciidoctor') : $a));
    return (function ($base, $super) {
        function $DitaaBlock() {
        };
        var self = $DitaaBlock = $klass($base, $super, 'DitaaBlock', $DitaaBlock);

        var def = self._proto, $scope = self._scope;

        self.$use_dsl();

        self.$named("ditaa");

        self.$on_context("open");

        self.$parse_content_as("literal");

        return (def.$process = function (parent, reader, attrs) {
                var $a, self = this, target = nil, type = nil, title = nil, filename = nil, alt = nil, caption = nil, width = nil, height = nil, scale = nil, align = nil, cache = nil, imagesdir = nil;

                title = "" + (attrs['$[]']("title"));
                alt = "" + (attrs['$[]']("alt"));
                caption = "" + (attrs['$[]']("caption"));
                width = "" + (attrs['$[]']("width"));
                height = "" + (attrs['$[]']("height"));
                scale = "" + (attrs['$[]']("scale"));
                align = "" + (attrs['$[]']("align"));
                type = "" + (attrs['$[]']("type"));
                filename = "" + (attrs['$[]']("file"));
                cache = "" + (attrs['$[]']("cache"));
                imagesdir = parent.$document().$attr('imagesdir','');

                if(filename == ""){
                    return nil;
                }

		        target = parent.$image_uri(filename);

                if (cache != "enabled"){
                    afx.ditaa(reader.$read(), type, imagesdir, target);
                }

                var attributesHash = {
                    "target": filename,
                    "title": title,
                    "alt": alt,
                    "caption": caption,
                    "width": width,
                    "height": height,
                    "scale": scale,
                    "align": align
                };

                var keys = Object.keys(attributesHash);

                keys.forEach(function (key) {
                    if (attributesHash[key] == "")
                        delete attributesHash[key];
                });

                return self.$create_image_block(parent, $hash2(Object.keys(attributesHash), attributesHash))
                    ;
            }, nil) && 'process';
    })(self, ($scope.Extensions)._scope.BlockProcessor);
})(Opal);
/* Generated by Opal 0.6.3 */
(function ($opal) {
    var $a, $b, TMP_1, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;

    if ($scope.RUBY_ENGINE['$==']("opal")) {
    }
    ;
    return ($a = ($b = $scope.Extensions).$register, $a._p = (TMP_1 = function () {
        var self = TMP_1._s || this;

        return self.$block($scope.DitaaBlock)
    }, TMP_1._s = self, TMP_1), $a).call($b);
})(Opal);
