{%- set _mod_docs_content_type = "CONCEPT" %}
# About data volume conditions and events {id="virt-about-dv-conditions-and-events_{{ context }}"}

To diagnose data volume issues, you can examine the `Conditions` and `Events` sections of the `oc describe` command output.  {._abstract}

Run the following command to inspect the data volume:

```terminal
$ oc describe dv <DataVolume>
```

The `Conditions` section displays the following `Types`:

*   `Bound`
*   `Running`
*   `Ready`

The `Events` section provides the following additional information:

*   `Type` of event
*   `Reason` for logging
*   `Source` of the event
*   `Message` containing additional diagnostic information.

The output from `oc describe` does not always contains `Events`.

An event is generated when the `Status`, `Reason`, or `Message` changes.
Both conditions and events react to changes in the state of the data volume.

For example, if you misspell the URL during an import operation, the import
generates a 404 message. That message change generates an event with a reason.
The output in the `Conditions` section is updated as well.