---
title: opm CLI reference
---

# opm CLI reference {#cli-opm-ref}

The `opm` command-line interface (CLI) is a tool for creating and maintaining Operator catalogs.

```terminal {title="opm CLI syntax"}
$ opm <command> [<subcommand>] [<argument>] [<flags>]
```

> [!WARNING]
> The `opm` CLI is not forward compatible. The version of the `opm` CLI used to generate catalog content must be earlier than or equal to the version used to serve the content on a cluster.

**Global flags**

| Flag | Description |
| --- | --- |
| `-skip-tls-verify` | Skip TLS certificate verification for container image registries while pulling bundles or indexes. |
| `--use-http` | When you pull bundles, use plain HTTP for container image registries. |
|  |  |

**Additional resources**

- [Operator Framework packaging format](/operators/understanding/olm-packaging-format#olm-file-based-catalogs_olm-packaging-format)
- [Managing custom catalogs](/operators/admin/olm-managing-custom-catalogs#olm-managing-custom-catalogs-fb)
- [Mirroring images for a disconnected installation using the oc-mirror plugin](/disconnected/installing-mirroring-disconnected#installing-mirroring-disconnected)
