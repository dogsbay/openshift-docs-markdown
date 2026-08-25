{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ pac }} command reference {id="pipelines-as-code-command-reference_{{ context }}"}

The `tkn pac` CLI tool offers the following capabilities: {._abstract}

*   Bootstrap {{ pac }} installation and configuration.
*   Create a new {{ pac }} repository.
*   List all {{ pac }} repositories.
*   Describe a {{ pac }} repository and the associated runs.
*   Generate a simple pipeline run to get started.
*   Resolve a pipeline run as if it was executed by {{ pac }}.


:::tip

You can use the commands corresponding to the capabilities for testing and experimentation, so that you do not have to make changes to the Git repository containing the application source code.

:::


## Basic syntax {id="_basic_syntax"}

```terminal
$ tkn pac [command or options] [arguments]
```

## Global options {id="_global_options"}

```terminal
$ tkn pac --help
```

## Utility commands {id="_utility_commands"}

### bootstrap {id="_bootstrap"}

**Bootstrapping {{ pac }} installation and configuration**

| Command | Description |
| --- | --- |
| `tkn pac bootstrap` | Installs and configures {{ pac }} for Git repository hosting service providers, such as GitHub and GitHub Enterprise. |
| `tkn pac bootstrap --nightly` | Installs the nightly build of {{ pac }}. |
| `tkn pac bootstrap --route-url <public_url_to_ingress_spec>` | Overrides the OpenShift route URL. By default, `tkn pac bootstrap` detects the OpenShift route, which is automatically associated with the {{ pac }} controller service. If you do not have an {{ product_title }} cluster, it asks you for the public URL that points to the ingress endpoint. |
| `tkn pac bootstrap github-app` | Create a GitHub application and secrets in the `openshift-pipelines` namespace. |

### repository {id="_repository"}

**Managing {{ pac }} repositories**

| Command | Description |
| --- | --- |
| `tkn pac create repository` | Creates a new {{ pac }} repository and a namespace based on the pipeline run template. |
| `tkn pac list` | Lists all the {{ pac }} repositories and displays the last status of the associated runs. |
| `tkn pac repo describe` | Describes a {{ pac }} repository and the associated runs. |

### generate {id="_generate"}

**Generating pipeline runs using {{ pac }}**

| Command | Description |
| --- | --- |
| `tkn pac generate` | Generates a simple pipeline run. When executed from the directory containing the source code, it automatically detects current Git information. In addition, it uses basic language detection capability and adds extra tasks depending on the language. For example, if it detects a `setup.py` file at the repository root, the [pylint task](https://hub.tekton.dev/tekton/task/pylint) is automatically added to the generated pipeline run. |

### resolve {id="_resolve"}

**Resolving and executing pipeline runs using {{ pac }}**

| Command | Description |
| --- | --- |
| `tkn pac resolve` | Executes a pipeline run as if it is owned by the {{ pac }} on service. |
| `tkn pac resolve -f .tekton/pull-request.yaml \ | oc apply -f -` |
| Displays the status of a live pipeline run that uses the template in `.tekton/pull-request.yaml`. Combined with a Kubernetes installation running on your local machine, you can observe the pipeline run without generating a new commit. If you run the command from a source code repository, it attempts to detect the current Git information and automatically resolve parameters such as current revision or branch. | `tkn pac resolve -f .tekton/pr.yaml -p revision=main -p repo_name=<repository_name>` |