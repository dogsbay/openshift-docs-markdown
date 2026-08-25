{%- set _mod_docs_content_type = "CONCEPT" %}
# Observing events {id="kmm-observing-events_{{ context }}"}

You can observe Kernel Module Management (KMM) events on {{ product_title }} to monitor kmod image builds, signing, and module load or unload operations. Events attach to `Module` and `Node` objects and appear in `oc describe` output. {._abstract}

## Build & sign {id="kmm-observing-events-build-and-sign_{{ context }}"}

KMM publishes events whenever it starts a kmod image build or observes its outcome. These events are attached to `Module` objects and are available at the end of the output of `oc describe module` command, as in the following example:

```terminal
$ oc describe modules.kmm.sigs.x-k8s.io kmm-ci-a
[...]
Events:
  Type    Reason          Age                From  Message
  ----    ------          ----               ----  -------
  Normal  BuildCreated    2m29s              kmm   Build created for kernel 6.6.2-201.fc39.x86_64
  Normal  BuildSucceeded  63s                kmm   Build job succeeded for kernel 6.6.2-201.fc39.x86_64
  Normal  SignCreated     64s (x2 over 64s)  kmm   Sign created for kernel 6.6.2-201.fc39.x86_64
  Normal  SignSucceeded   57s                kmm   Sign job succeeded for kernel 6.6.2-201.fc39.x86_64
```

## Module load or unload {id="kmm-observing-events-module-load-unload_{{ context }}"}

KMM publishes events whenever it successfully loads or unloads a kernel module on a node. These events are attached to `Node` objects and are available at the end of the output of `oc describe node` command, as in the following example:

```terminal
$ oc describe node my-node
[...]
Events:
  Type    Reason          Age    From  Message
  ----    ------          ----   ----  -------
[...]
  Normal  ModuleLoaded    4m17s  kmm   Module default/kmm-ci-a loaded into the kernel
  Normal  ModuleUnloaded  2s     kmm   Module default/kmm-ci-a unloaded from the kernel
```