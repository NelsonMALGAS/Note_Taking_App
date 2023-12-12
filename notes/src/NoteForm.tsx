import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import CreactableReactSelect from "react-select/creatable";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useRef, useState } from "react";
import { NoteData, Tag } from "./App";
import { v4 as uuidV4 } from "uuid";

type NoteFormProps = {
	onSubmit: (data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
	availableTags: Tag[];
} & Partial<NoteData>

const NoteForm = (props: NoteFormProps) => {
	const { onSubmit , onAddTag , availableTags , title="" , tags=[] , markdown="" } = props;

	const titleRef = useRef<HTMLInputElement>(null);
	const markdownRef = useRef<HTMLTextAreaElement>(null);
	const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
    const navigate = useNavigate()

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit({
			title: titleRef.current!.value,
			markdown: markdownRef.current!.value,
			tags: selectedTags,
		});

        navigate("..")
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Stack gap={4}>
				<Row>
					<Col>
						<Form.Group controlId="title">
							<Form.Label>Title</Form.Label>
							<Form.Control ref={titleRef} required defaultValue={title} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="tags">
							<Form.Label>Tags</Form.Label>
							<CreactableReactSelect
                            onCreateOption={label =>{
                                const newTag :Tag = { id: uuidV4() , label}
                                onAddTag(newTag)
                                setSelectedTags(prev => [...prev , newTag] )
                            } }
								value={selectedTags.map((tag) => {
									return { label: tag.label, value: tag.id };
								})}
                                options={availableTags.map((tag) => {

                                    return {label : tag.label, value: tag.id}
                                })}
								onChange={(tags) => {
									setSelectedTags(
										tags.map((tag) => {
											return { label: tag.label, id: tag.value };
										}),
									);
								}}
								isMulti
							/>
						</Form.Group>
					</Col>
				</Row>

				<Form.Group controlId="markdown">
					<Form.Label>Body</Form.Label>
					<Form.Control ref={markdownRef} required as="textarea" rows={15} defaultValue={markdown} />
				</Form.Group>
				<Stack direction="horizontal" gap={2}>
					<Button type="submit" variant="primary">
						Save
					</Button>
					<Link to="..">
						<Button type="button" variant="outline-secondary">
							Cancel
						</Button>
					</Link>
				</Stack>
			</Stack>
		</Form>
	);
};

export default NoteForm;
