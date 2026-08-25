# Deprecated and removed features {id="ossm-deprecated-features_{{ context }}"}
Some features available in previous releases have been deprecated or removed.

Deprecated functionality is still included in {{ product_title }} and continues to be supported; however, it will be removed in a future release of this product and is not recommended for new deployments.

Removed functionality no longer exists in the product.

## Deprecated and removed features in {{ SMProductName }} 2.5 {id="deprecated-removed-features-ossm-2-5"}

The v2.2 `ServiceMeshControlPlane` resource is no longer supported. Customers should update their mesh deployments to use a later version of the `ServiceMeshControlPlane` resource.

Support for the {{ JaegerName }} Operator is deprecated. To collect trace spans, use the {{ DTProductName }} (Tempo) Stack.

Support for the {{ es_op }} is deprecated.

Istio will remove support for first-party JSON Web Tokens (JWTs). Istio will still support third-Party JWTs.

## Deprecated and removed features in {{ SMProductName }} 2.4 {id="_deprecated_and_removed_features_in_smproductname_24"}

The v2.1 `ServiceMeshControlPlane` resource is no longer supported. Customers should upgrade their mesh deployments to use a later version of the `ServiceMeshControlPlane` resource.

Support for Istio OpenShift Routing (IOR) is deprecated and will be removed in a future release.

Support for Grafana is deprecated and will be removed in a future release.

Support for the following cipher suites, which were deprecated in {{ SMProductName }} 2.3, has been removed from the default list of ciphers used in TLS negotiations on both the client and server sides. Applications that require access to services requiring one of these cipher suites will fail to connect when a TLS connection is initiated from the proxy.

*   ECDHE-ECDSA-AES128-SHA
*   ECDHE-RSA-AES128-SHA
*   AES128-GCM-SHA256
*   AES128-SHA
*   ECDHE-ECDSA-AES256-SHA
*   ECDHE-RSA-AES256-SHA
*   AES256-GCM-SHA384
*   AES256-SHA

## Deprecated and removed features in {{ SMProductName }} 2.3 {id="_deprecated_and_removed_features_in_smproductname_23"}

Support for the following cipher suites has been deprecated. In a future release, they will be removed from the default list of ciphers used in TLS negotiations on both the client and server sides.

*   ECDHE-ECDSA-AES128-SHA
*   ECDHE-RSA-AES128-SHA
*   AES128-GCM-SHA256
*   AES128-SHA
*   ECDHE-ECDSA-AES256-SHA
*   ECDHE-RSA-AES256-SHA
*   AES256-GCM-SHA384
*   AES256-SHA

The `ServiceMeshExtension` API, which was deprecated in {{ SMProductName }} version 2.2, was removed in {{ SMProductName }} version 2.3. If you are using the `ServiceMeshExtension` API, you must migrate to the `WasmPlugin` API to continue using your WebAssembly extensions.

## Deprecated features in {{ SMProductName }} 2.2 {id="_deprecated_features_in_smproductname_22"}

The `ServiceMeshExtension` API is deprecated as of release 2.2 and will be removed in a future release.  While `ServiceMeshExtension` API is still supported in release 2.2, customers should start moving to the new `WasmPlugin` API.

## Removed features in {{ SMProductName }} 2.2 {id="_removed_features_in_smproductname_22"}

This release marks the end of support for {{ SMProductShortName }} control planes based on Service Mesh 1.1 for all platforms.

## Removed features in {{ SMProductName }} 2.1 {id="_removed_features_in_smproductname_21"}

In Service Mesh 2.1, the Mixer component is removed. Bug fixes and support is provided through the end of the Service Mesh 2.0 life cycle.

Upgrading from a Service Mesh 2.0.x release to 2.1 will not proceed if Mixer plugins are enabled. Mixer plugins must be ported to WebAssembly Extensions.

## Deprecated features in {{ SMProductName }} 2.0 {id="_deprecated_features_in_smproductname_20"}

The Mixer component was deprecated in release 2.0 and will be removed in release 2.1. While using Mixer for implementing extensions was still supported in release 2.0, extensions should have been migrated to the new [WebAssembly](https://istio.io/latest/blog/2020/wasm-announce/) mechanism.

The following resource types are no longer supported in {{ SMProductName }} 2.0:

*   `Policy` (authentication.istio.io/v1alpha1) is no longer supported. Depending on the specific configuration in your Policy resource, you may have to configure multiple resources to achieve the same effect.
    *   Use `RequestAuthentication` (security.istio.io/v1beta1)
    *   Use `PeerAuthentication` (security.istio.io/v1beta1)
*   `ServiceMeshPolicy` (maistra.io/v1) is no longer supported.
    *   Use `RequestAuthentication` or `PeerAuthentication`, as mentioned above, but place in the {{ SMProductShortName }} control plane namespace.
*   `RbacConfig` (rbac.istio.io/v1alpha1) is no longer supported.
    *   Replaced by `AuthorizationPolicy` (security.istio.io/v1beta1), which encompasses behavior of `RbacConfig`, `ServiceRole`, and `ServiceRoleBinding`.
*   `ServiceMeshRbacConfig` (maistra.io/v1) is no longer supported.
    *   Use `AuthorizationPolicy` as above, but place in {{ SMProductShortName }} control plane namespace.
*   `ServiceRole` (rbac.istio.io/v1alpha1) is no longer supported.
*   `ServiceRoleBinding` (rbac.istio.io/v1alpha1) is no longer supported.
*   In Kiali, the `login` and `LDAP` strategies are deprecated. A future version will introduce authentication using OpenID providers.