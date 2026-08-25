{%- set _mod_docs_content_type = "REFERENCE" %}
# Mirror registry for Red&#160;Hat OpenShift 2.0 release notes {id="mirror-registry-release-notes-2-0_{{ context }}"}

See the Mirror registry for Red&#160;Hat OpenShift 2.0 release notes for information about updates and changes in each release. {._abstract}

The following sections provide details for each 2.0 release of the mirror registry for Red&#160;Hat OpenShift.

## Mirror registry for Red&#160;Hat OpenShift 2.0.11 {id="mirror-registry-for-openshift-2-0-11_{{ context }}"}

Issued: 22 June 2026

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.18.

The following advisory, which includes bug fixes, is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHSA-2026:28441 - mirror registry for Red&#160;Hat OpenShift 2.0.11](https://access.redhat.com/errata/RHSA-2026:28441)

The following enhancements were added to this release:

*   With this release, the `./mirror-registry upgrade` command supports `--sslCert`, `--sslKey`, and `--sslCheckSkip` flags for SSL/TLS certificate rotation during upgrades. You must provide `--sslCert` and `--sslKey` together; passing only one of these flags causes the upgrade to fail. For example:

    Rotate certificates during upgrade:
    ```terminal
    $ ./mirror-registry upgrade --sslCert /path/to/new.cert --sslKey /path/to/new.key
    ```

    Skip hostname validation, for example when you use wildcard or internal CA certificates:
    ```terminal
    $ ./mirror-registry upgrade --sslCert /path/to/cert --sslKey /path/to/key --sslCheckSkip
    ```

    Normal upgrade that uses existing certificates; no SSL flags are required:
    ```terminal
    $ ./mirror-registry upgrade
    ```

    If you do not pass SSL flags, a warning is displayed when existing certificates are not found on the target host. During a PostgreSQL to SQLite migration, missing certificates block the upgrade before any database changes are made. The `--sslCheckSkip` flag skips CLI hostname validation only; Quay still requires `ssl.cert` and `ssl.key` to start.
*   With this release, the `./mirror-registry upgrade` command automatically preserves the existing `SERVER_HOSTNAME`, including custom ports, and the `quayRoot`, `quayStorage`, and `sqliteStorage` settings from the current installation. You do not need to pass `--quayHostname`, `--quayRoot`, `--quayStorage`, or `--sqliteStorage` for a standard upgrade. Explicit flags override the preserved values if you provide them.

## Mirror registry for Red&#160;Hat OpenShift 2.0.10 {id="mirror-registry-for-openshift-2-0-10_{{ context }}"}

Issued: 03 March 2026

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.14.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2026:3953 - mirror registry for Red&#160;Hat OpenShift 2.0.10](https://access.redhat.com/errata/RHBA-2026:3953)

The following bugs were fixed as part of this release:

*   [PROJQUAY-9799](https://redhat.atlassian.net/browse/PROJQUAY-9799). In this update, upgrading from PostgreSQL to SQLite without proper configuration previously triggered a SQLite cursor error. This error prevented Quay from starting after the SQLite upgrade, leading to service disruption. With this release, the SQLite upgrade process no longer triggers the cursor error, enabling a successful Quay upgrade without crashes due to SQLite optimization issues.
*   [PROJQUAY-10093](https://redhat.atlassian.net/browse/PROJQUAY-10093). The _Mirror registry for Red&#160;Hat OpenShift_ has been upgraded to use the latest Redis 6 (`redis-6:1-1766406130`) version.

## Mirror registry for Red&#160;Hat OpenShift 2.0.9 {id="mirror-registry-for-openshift-2-0-9_{{ context }}"}

Issued: 17 November 2025

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.13.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2025:21600 - mirror registry for Red&#160;Hat OpenShift 2.0.9](https://access.redhat.com/errata/RHBA-2025:21600)

## Mirror registry for Red&#160;Hat OpenShift 2.0.8 {id="mirror-registry-for-openshift-2-0-8_{{ context }}"}

Issued: 16 October 2025

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.12.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2025:17062 - mirror registry for Red&#160;Hat OpenShift 2.0.8](https://access.redhat.com/errata/RHBA-2025:17062)

## Mirror registry for Red&#160;Hat OpenShift 2.0.7 {id="mirror-registry-for-openshift-2-0-7_{{ context }}"}

Issued: 14 July 2025

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.10.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2025:9645 - mirror registry for Red&#160;Hat OpenShift 2.0.7](https://access.redhat.com/errata/RHBA-2025:9645)

## Mirror registry for Red&#160;Hat OpenShift 2.0.6 {id="mirror-registry-for-openshift-2-0-6_{{ context }}"}

Issued: 28 April 2025

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.8.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2025:4251 - mirror registry for Red&#160;Hat OpenShift 2.0.6](https://access.redhat.com/errata/RHBA-2025:4251)

## Mirror registry for Red&#160;Hat OpenShift 2.0.5 {id="mirror-registry-for-openshift-2-0-5_{{ context }}"}

Issued: 13 January 2025

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.5.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2025:0298 - mirror registry for Red&#160;Hat OpenShift 2.0.5](https://access.redhat.com/errata/RHBA-2025:0298)

## Mirror registry for Red&#160;Hat OpenShift 2.0.4 {id="mirror-registry-for-openshift-2-0-4_{{ context }}"}

Issued: 06 January 2025

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.4.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2025:0033 - mirror registry for Red&#160;Hat OpenShift 2.0.4](https://access.redhat.com/errata/RHBA-2025:0033)

## Mirror registry for Red&#160;Hat OpenShift 2.0.3 {id="mirror-registry-for-openshift-2-0-3_{{ context }}"}

Issued: 25 November 2024

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.3.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2024:10181 - mirror registry for Red&#160;Hat OpenShift 2.0.3](https://access.redhat.com/errata/RHBA-2024:10181)

## Mirror registry for Red&#160;Hat OpenShift 2.0.2 {id="mirror-registry-for-openshift-2-0-2_{{ context }}"}

Issued: 31 October 2024

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.2.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2024:8370 - mirror registry for Red&#160;Hat OpenShift 2.0.2](https://access.redhat.com/errata/RHBA-2024:8370)

## Mirror registry for Red&#160;Hat OpenShift 2.0.1 {id="mirror-registry-for-openshift-2-0-1_{{ context }}"}

Issued: 26 September 2024

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.1.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2024:7070 - mirror registry for Red&#160;Hat OpenShift 2.0.1](https://access.redhat.com/errata/RHBA-2024:7070)

## Mirror registry for Red&#160;Hat OpenShift 2.0.0 {id="mirror-registry-for-openshift-2-0-0_{{ context }}"}

Issued: 03 September 2024

_Mirror registry for Red&#160;Hat OpenShift_ is now available with Red&#160;Hat Quay 3.12.0.

The following advisory is available for the _mirror registry for Red&#160;Hat OpenShift_:

*   [RHBA-2024:5277 - mirror registry for Red&#160;Hat OpenShift 2.0.0](https://access.redhat.com/errata/RHBA-2024:5277)

The following new features are available with _mirror registry for Red&#160;Hat OpenShift_ 2.0.0:

*   With the release of _mirror registry for Red&#160;Hat OpenShift_, the internal database has been upgraded from PostgreSQL to SQLite. As a result, data is now stored on the `sqlite-storage` Podman volume by default, and the overall tarball size is reduced by 300 MB.

    New installations use SQLite by default. Before upgrading to version 2.0, see "Updating mirror registry for Red Hat OpenShift from a local host" or "Updating mirror registry for Red Hat OpenShift from a remote host" depending on your environment.
*   A new feature flag, `--sqliteStorage` has been added. With this flag, you can manually set the location where SQLite database data is saved.
*   _Mirror registry for Red&#160;Hat OpenShift_ is now available on {{ ibm_power_title }} and {{ ibm_z_title }} architectures (`s390x` and `ppc64le`).