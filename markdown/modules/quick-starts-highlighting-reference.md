{%- set _mod_docs_content_type = "REFERENCE" %}
# Quick start highlighting markdown reference {id="quick-start-highlighting-reference_{{ context }}"}

You can use highlighting, or hints, in a quick start to add a link that highlights and animates a component of the web console. {._abstract}

The markdown syntax contains:

*   Bracketed link text
*   The `highlight` keyword, followed by the ID of the element that you want to animate

## Perspective switcher {id="quick-start-highlighting-perspective-switcher_{{ context }}"}

```text
[Perspective switcher]{{highlight qs-perspective-switcher}}
```

## Administrator perspective navigation links {id="quick-start-highlighting-admin-perspective_{{ context }}"}

```text
[Home]{{highlight qs-nav-home}}
[Operators]{{highlight qs-nav-operators}}
[Workloads]{{highlight qs-nav-workloads}}
[Serverless]{{highlight qs-nav-serverless}}
[Networking]{{highlight qs-nav-networking}}
[Storage]{{highlight qs-nav-storage}}
[Service catalog]{{highlight qs-nav-servicecatalog}}
[Compute]{{highlight qs-nav-compute}}
[User management]{{highlight qs-nav-usermanagement}}
[Administration]{{highlight qs-nav-administration}}
```

## Developer perspective navigation links {id="quick-start-highlighting-dev-perspective_{{ context }}"}

```text
[Add]{{highlight qs-nav-add}}
[Topology]{{highlight qs-nav-topology}}
[Search]{{highlight qs-nav-search}}
[Project]{{highlight qs-nav-project}}
[Helm]{{highlight qs-nav-helm}}
```

## Common navigation links {id="quick-start-highlighting-common-nav_{{ context }}"}

```text
[Builds]{{highlight qs-nav-builds}}
[Pipelines]{{highlight qs-nav-pipelines}}
[Monitoring]{{highlight qs-nav-monitoring}}
```

## Masthead links {id="quick-start-highlighting-masthead-links_{{ context }}"}

```text
[CloudShell]{{highlight qs-masthead-cloudshell}}
[Utility Menu]{{highlight qs-masthead-utilitymenu}}
[User Menu]{{highlight qs-masthead-usermenu}}
[Applications]{{highlight qs-masthead-applications}}
[Import]{{highlight qs-masthead-import}}
[Help]{{highlight qs-masthead-help}}
[Notifications]{{highlight qs-masthead-notifications}}
```