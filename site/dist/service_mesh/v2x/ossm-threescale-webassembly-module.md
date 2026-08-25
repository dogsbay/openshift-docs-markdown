---
title: Using the 3scale WebAssembly module
---

# Using the 3scale WebAssembly module {#ossm-threescale-webassembly-module}

> [!NOTE]
> The `threescale-wasm-auth` module runs on integrations of 3scale API Management 2.11 or later with {{ SMProductName }} 2.1.0 or later.

The `threescale-wasm-auth` module is a [WebAssembly](https://webassembly.org) module that uses a set of interfaces, known as an application binary interfaces (*ABI*). This is defined by the [*Proxy-WASM*](https://github.com/proxy-wasm/spec) specification to drive any piece of software that implements the ABI so it can authorize HTTP requests against 3scale.

As an ABI specification, Proxy-WASM defines the interaction between a piece of software named *host* and another named *module*, *program*, or *extension*. The host exposes a set of services used by the module to perform a task, and in this case, to process proxy requests.

The host environment is composed of a WebAssembly virtual machine interacting with a piece of software, in this case, an HTTP proxy.

The module itself runs in isolation to the outside world except for the instructions it runs on the virtual machine and the ABI specified by Proxy-WASM. This is a safe way to provide extension points to software: the extension can only interact in well-defined ways with the virtual machine and the host. The interaction provides a computing model and a connection to the outside world the proxy is meant to have.

## Compatibility {#compatibility_ossm-threescale-webassembly-module}

The `threescale-wasm-auth` module is designed to be fully compatible with all implementations of the *Proxy-WASM ABI* specification. At this point, however, it has only been thoroughly tested to work with the [Envoy](https://www.envoyproxy.io) reverse proxy.

## Usage as a stand-alone module {#usage-as-a-stand-alone-module_ossm-threescale-webassembly-module}

Because of its self-contained design, it is possible to configure this module to work with Proxy-WASM proxies independently of {{ SMProductShortName }}, as well as 3scale Istio adapter deployments.

## Prerequisites {#prerequisites_ossm-threescale-webassembly-module}

- The module works with all supported 3scale releases, except when configuring a service to use [OpenID connect (OIDC)](/openshift-docs-markdown/authentication/identity_providers/configuring-oidc-identity-provider#configuring-oidc-identity-provider), which requires 3scale 2.11 or later.

**Additional resources**

- [Migrating from `ServiceMeshExtension` to `WasmPlugin` resources](/openshift-docs-markdown/service_mesh/v2x/ossm-extensions#ossm-extensions-migration-overview_ossm-extensions)
- [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources)
