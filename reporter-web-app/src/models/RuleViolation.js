/*
 * Copyright (C) 2019 HERE Europe B.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 * License-Filename: LICENSE
 */

class RuleViolation {
    constructor(obj) {
        this.rule = '';
        this.pkg = '';
        this.license = '';
        this.licenseSource = '';
        this.severity = '';
        this.message = '';
        this.howToFix = '';

        if (obj instanceof Object) {
            if (obj.rule) {
                this.rule = obj.rule;
            }

            if (obj.pkg) {
                this.pkg = obj.pkg;
            }

            if (obj.license) {
                this.license = obj.license;
            }

            if (obj.license_source) {
                this.licenseSource = obj.license_source;
            }

            if (obj.licenseSource) {
                this.licenseSource = obj.licenseSource;
            }

            if (obj.severity) {
                this.severity = obj.severity;
            }

            if (obj.message) {
                this.message = obj.message;
            }

            if (obj.howToFix) {
                this.howToFix = obj.howToFix;
            }
        }
    }
}

export default RuleViolation;
